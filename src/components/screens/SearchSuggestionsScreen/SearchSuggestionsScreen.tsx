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
import { useRef } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import LocationDotIcon from "../../../../assets/svg/location-dot-solid.svg"
import BarsFilterIcon from "../../../../assets/svg/bars-filter-solid.svg"
import SearchSuggestionsTopButton from "./SearchSuggestionsTopButton/SearchSuggestionsTopButton"
import SearchSuggestionItem from "./SearchSuggestionItem/SearchSuggestionItem"
import { SearchSuggestionItemVariants } from "./SearchSuggestionItem/SearchSuggestionItem.types"
import SearchSuggestionsLocationModal from "./SearchSuggestionsLocationModal/SearchSuggestionsLocationModal"
import SearchSuggestionsFiltersModal from "./SearchSuggestionsFiltersModal/SearchSuggestionsFiltersModal"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../designSystem/Pressable/Pressable"
import { TextInput as RNTextInput } from "react-native"

export default () => {

  const { params: { speciality } } = useRoute<SearchSuggestionsScreenProps['route']>()
  const { goBack } = useNavigation<SearchSuggestionsScreenProps['navigation']>()

  const { colors } = useTheme<Theme>()

  const searchBarRef = useRef<RNTextInput>(null)

  const bottomSheetLocationModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetFilterModalRef = useRef<BottomSheetModal>(null);

  return (
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
            defaultValue={speciality}
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
              label="A Compléter" 
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

          <Box marginTop="sToM">
            <Text variant="label" marginBottom="sToStoM">
              Résultats de recherche
            </Text>
            <SearchSuggestionItem variant={SearchSuggestionItemVariants.FollowingDays} />
          </Box>
        </Box>
      </SafeAreaView>

      <SearchSuggestionsLocationModal ref={bottomSheetLocationModalRef} />
      <SearchSuggestionsFiltersModal ref={bottomSheetFilterModalRef} />
    </Box>
  )
}