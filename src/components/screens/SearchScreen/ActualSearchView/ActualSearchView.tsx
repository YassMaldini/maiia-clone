import Box from "../../../designSystem/Box/Box"
import Pressable from "../../../designSystem/Pressable/Pressable"
import Text from "../../../designSystem/Text/Text"
import ChevronRightIcon from "../../../../../assets/svg/chevron-right.svg"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import { ActualSearchViewProps } from "./ActualSearchView.types"
import { FlashList } from "@shopify/flash-list"
import { useNavigation } from "@react-navigation/native"
import { SearchScreenProps } from "../SearchScreen.types"
import { SearchStackScreenList } from "../../../navigation/SearchStack/SearchStack.types"

export default ({ hits }: ActualSearchViewProps) => {

  const { navigate } = useNavigation<SearchScreenProps['navigation']>()

  return (
    <Box
      flex={1}
      backgroundColor="background"
      borderTopLeftRadius="m"
      borderTopRightRadius="m"
      padding="sToM"
    >
      <FlashList
        data={hits}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="border"
            borderRadius="s"
            marginBottom="s"
            style={{
              padding: 10
            }}
            onPress={() => {
              navigate(SearchStackScreenList.SearchSuggestionsScreen, { speciality: item.shortName })
            }}
          >
            <Text>{item.name}</Text>
            <SvgIcon 
              icon={ChevronRightIcon}
              width={16}
              height={16}
            />
          </Pressable>
        )}
        estimatedItemSize={50}
      />
    </Box>
  )
}