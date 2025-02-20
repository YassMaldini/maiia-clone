import { useNavigation, useRoute } from "@react-navigation/native"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { SearchSuggestionsScreenProps } from "./SearchSuggestionsScreen.types"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { SafeAreaView } from "react-native-safe-area-context"
import TextInput from "../../designSystem/TextInput/TextInput"
import SearchIcon from "../../../../assets/svg/magnifying-glass-regular.svg"
import ChevronLeftIcon from "../../../../assets/svg/chevron-left-regular.svg"
import { useEffect, useMemo, useRef, useState } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import LocationDotIcon from "../../../../assets/svg/location-dot-solid.svg"
import BarsFilterIcon from "../../../../assets/svg/bars-filter-solid.svg"
import SearchSuggestionsTopButton from "./SearchSuggestionsTopButton/SearchSuggestionsTopButton"
import SearchSuggestionItem from "./SearchSuggestionItem/SearchSuggestionItem"
import SearchSuggestionsLocationModal from "./SearchSuggestionsLocationModal/SearchSuggestionsLocationModal"
import SearchSuggestionsFiltersModal from "./SearchSuggestionsFiltersModal/SearchSuggestionsFiltersModal"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../designSystem/Pressable/Pressable"
import { TextInput as RNTextInput } from "react-native"
import { SearchSuggestionsContext } from "./SearchSuggestionsScreen.context"
import { AvailabilitiesQueryParams, AvailabilityFilterTypes, ConsultationModeFilters, ExtraFeeFilters, NewPatientFilters } from "../../api/queries/useAvailabilities/useAvailabilities.types"
import { useAvailabilities } from "../../api/queries/useAvailabilities/useAvailabilities"
import { useMergedStatesFromFetchers } from "../../hooks/useMergedStatesFromFetchers/useMergedStatesFromFetchers"
import { Loading } from "../../commons/Loading/Loading"
import { FlashList } from "@shopify/flash-list"
import { useSelector } from "react-redux"
import { currentLocationSelector } from "../../../store/main/mainReducerSelectors"

export default () => {

  const { params: { searchHit } } = useRoute<SearchSuggestionsScreenProps['route']>()
  const { goBack } = useNavigation<SearchSuggestionsScreenProps['navigation']>()

  const { colors } = useTheme<Theme>()

  const currentLocation = useSelector(currentLocationSelector)

  const searchBarRef = useRef<RNTextInput>(null)

  const bottomSheetLocationModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetFilterModalRef = useRef<BottomSheetModal>(null);

  const [availabilityFilters, setAvailabilityFilters] = useState<AvailabilitiesQueryParams>({
    page: 0,
    limit: 15,
    'speciality.shortName': searchHit.shortName,
    clientDocavenue: true,
    'availabilityFilter.type': AvailabilityFilterTypes.ALL,
    consultationModeFilter: ConsultationModeFilters.ALL,
    extraFeeFilter: ExtraFeeFilters.ALL,
    newPatientFilter: NewPatientFilters.ALL,
    locality: currentLocation
  })

  const { 
    data: availabilities, 
    isLoading: isAvailabilitiesLoading, 
    refetch: refetchAvailabilities, 
    isRefetching: isAvailabilitiesRefetching 
  } = useAvailabilities(availabilityFilters)

  useEffect(() => {
    console.log('availabilities', availabilities)
  }, [availabilities])

  useEffect(() => {
    console.log('availabilityFilters', availabilityFilters)
  }, [availabilityFilters])

  useEffect(() => {
    if (availabilityFilters.locality !== currentLocation) {
      setAvailabilityFilters(state => ({
        ...state,
        locality: currentLocation
      }))
    }
  }, [currentLocation, availabilityFilters])

  useEffect(() => {
    setAvailabilityFilters(value => ({
      ...value,
      shortName: searchHit.shortName
    }))
  }, [searchHit])

  useEffect(() => {
    refetchAvailabilities()
  }, [availabilityFilters])

  const contextValue = useMemo(() => ({
    availabilityFilters, 
    setAvailabilityFilters,
    availabilities
  }), [
    availabilityFilters, 
    setAvailabilityFilters,
    availabilities
  ])

  const { isLoading } = useMergedStatesFromFetchers({ loadings: [isAvailabilitiesLoading, isAvailabilitiesRefetching]})

  return (
    <SearchSuggestionsContext.Provider value={contextValue}>
      <Box flex={1}>
        <LinearGradient
          colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 400
          }}
        />

        <SafeAreaView style={{ flex: 1 }}>
          <Box
            flexDirection="row"
            alignItems="center"
            paddingHorizontal="sToM"
            paddingTop="s"
            paddingBottom="sToStoM"
          >
            <Pressable
              marginRight="s"
              onPress={goBack}
            >
              <SvgIcon
                icon={ChevronLeftIcon}
                color="white"
                width={22}
                height={22}
              />
            </Pressable>
            <Box flex={1}>
              <TextInput
                ref={searchBarRef}
                startIcon={SearchIcon}
                hasBlurIcon
                placeholder="Vous recherchez ... ?"
                defaultValue={searchHit.name}
              />
            </Box>
          </Box>

          <Box
            flex={1}
            backgroundColor="background"
            borderTopLeftRadius="m"
            borderTopRightRadius="m"
            padding="sToM"
          >
            <Box flexDirection="row" columnGap="sToStoM">
              <SearchSuggestionsTopButton
                icon={LocationDotIcon}
                label={availabilityFilters.locality ? availabilityFilters.locality.split('-')[1] : "A Compléter"}
                onPress={() => {
                  bottomSheetLocationModalRef.current?.present()
                }}
              />
              <SearchSuggestionsTopButton
                icon={BarsFilterIcon}
                label="Filtres"
                onPress={() => {
                  bottomSheetFilterModalRef.current?.present()
                }}
              />
            </Box>

            <Box flex={1} marginTop="sToM">
              <FlashList 
                data={availabilities?.items}
                ListHeaderComponent={
                  <Text variant="label" marginBottom="sToStoM">
                    Résultats de recherche
                  </Text>
                }
                renderItem={({ item, index }) => {
                  return (
                    <SearchSuggestionItem 
                      key={index}
                      item={item} 
                    />
                  )
                }}
                estimatedItemSize={318}
              />
            </Box>
          </Box>
        </SafeAreaView>

        <SearchSuggestionsLocationModal ref={bottomSheetLocationModalRef} />
        <SearchSuggestionsFiltersModal ref={bottomSheetFilterModalRef} />
      </Box>
    </SearchSuggestionsContext.Provider>
  )
}