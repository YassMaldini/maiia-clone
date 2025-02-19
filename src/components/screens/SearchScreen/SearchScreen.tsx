import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { SafeAreaView } from "react-native-safe-area-context"
import TextInput from "../../designSystem/TextInput/TextInput"
import SearchIcon from "../../../../assets/svg/magnifying-glass-regular.svg"
import ChevronLeftIcon from "../../../../assets/svg/chevron-left-regular.svg"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import { mostSearchedSpecialities, otherSpecialities } from "./SearchScreen.data"
import { TextInput as RNTextInput, TouchableHighlight, TouchableOpacity } from "react-native"
import SearchSpecialityCard from "./SearchSpecialityCard/SearchSpecialityCard"
import SearchOtherSpacialityButton from "./SearchOtherSpacialityButton/SearchOtherSpacialityButton"
import { useNavigation } from "@react-navigation/native"
import { SearchScreenProps } from "./SearchScreen.types"
import { SearchStackScreenList } from "../../navigation/SearchStack/SearchStack.types"
import { useCallback, useRef, useState } from "react"
import Pressable from "../../designSystem/Pressable/Pressable"
import ActualSearchView from "./ActualSearchView/ActualSearchView"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SearchQueryHit, SearchQueryParams, SearchQueryResponse } from "../../api/mutations/search/search.types"
import { SEARCH_QUERY_KEY, searchQuery } from "../../api/mutations/search/search.query"

export default () => {

  const { colors } = useTheme<Theme>()

  const { navigate } = useNavigation<SearchScreenProps['navigation']>()

  const queryClient = useQueryClient()

  const searchBarRef = useRef<RNTextInput>(null)

  const [isSearchBarFocused, setSearchBarFocused] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchQueryHit[]>()

  const { mutate: search } = useMutation<Awaited<SearchQueryResponse[]>, Error, SearchQueryParams>(
    {
      mutationKey: [SEARCH_QUERY_KEY],
      mutationFn: (data) => searchQuery(data),
      onMutate: () => queryClient.cancelQueries(),
      onSuccess: (response) => {
        console.log('response', response)
        setSearchResults(response[0].hits)
      },
    }
  );

  const DefaultView = () => (
    <Box
      flex={1}
      backgroundColor="background"
      borderTopLeftRadius="m"
      borderTopRightRadius="m"
      padding="sToM"
    >
      <Box marginBottom="sToM">
        <Text variant="label" marginBottom="sToStoM">
          Les plus recherchés
        </Text>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          gap="sToStoM"
        >
          {mostSearchedSpecialities.map(({ icon, label }, index) => (
            <SearchSpecialityCard
              key={index}
              {...{ icon, label }}
              onPress={() => navigate(SearchStackScreenList.SearchSuggestionsScreen, { speciality: label })}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Text variant="label">
          Autres
        </Text>
        <Box>
          {otherSpecialities.map(({ label }, index) => (
            <SearchOtherSpacialityButton
              key={index}
              {...{ label }}
              onPress={() => navigate(SearchStackScreenList.SearchSuggestionsScreen, { speciality: label })}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )

  const CurrentView = useCallback(() => {
    if (isSearchBarFocused) {
      return <ActualSearchView hits={searchResults} />
    } else {
      return <DefaultView />
    }
  }, [isSearchBarFocused, searchResults])

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
          {isSearchBarFocused &&
            <Pressable
              marginRight="s"
              onPress={() => {
                setSearchBarFocused(false)
                searchBarRef.current?.blur()
              }}
            >
              <SvgIcon
                icon={ChevronLeftIcon}
                color="white"
                width={22}
                height={22}
              />
            </Pressable>
          }
          <Box flex={1}>
            <TextInput
              ref={searchBarRef}
              startIcon={SearchIcon}
              hasBlurIcon={isSearchBarFocused}
              placeholder="Vous recherchez ... ?"
              // editable={isSearchBarFocused}
              onPress={() => {
                setSearchBarFocused(true)
                searchBarRef.current?.focus()
              }}
              // onBlur={() => {
              //   setSearchBarFocused(false)
              // }}
              onChangeText={(text) => {
                search({ text })
              }}
            />
          </Box>
        </Box>

        <CurrentView />

      </SafeAreaView>
    </Box>
  )
}