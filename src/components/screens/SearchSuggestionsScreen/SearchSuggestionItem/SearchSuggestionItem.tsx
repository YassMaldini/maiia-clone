import { Image } from "react-native";
import Box from "../../../designSystem/Box/Box";
import { SearchSuggestionItemProps, SearchSuggestionItemVariants } from "./SearchSuggestionItem.types";
import Pressable from "../../../designSystem/Pressable/Pressable";
import Text from "../../../designSystem/Text/Text";
import Chip from "../../../designSystem/Chip/Chip";
import { ChipColors } from "../../../designSystem/Chip/Chip.types";
import SearchSuggestionItemAvailabilities from "./SearchSuggestionItemAvailabilities/SearchSuggestionItemAvailabilities";
import { useNavigation } from "@react-navigation/native";
import { SearchSuggestionsScreenProps } from "../SearchSuggestionsScreen.types";
import { SearchStackScreenList } from "../../../navigation/SearchStack/SearchStack.types";

export default ({ variant }: SearchSuggestionItemProps) => {

  const { navigate } = useNavigation<SearchSuggestionsScreenProps['navigation']>()

  return (
    <Pressable 
      marginBottom="sToM"
      borderWidth={1}
      borderColor="border"
      padding="sToStoM"
      borderRadius="s"
      onPress={() => navigate(SearchStackScreenList.PractitionerScreen, { practitionerId: 'someId' })}
    >
      <Box flexDirection="row" alignItems="center" marginBottom="s">
        <Image
          source={{ uri: 'https://api-pat.maiia.com/pat-public/files/8358ff47-c796-4ab7-9cfe-fdac1345fe26-pharmacie-sainte-anne-lyon.png' }} 
          width={32}
          height={32}
          borderRadius={16}
        />
        <Box marginLeft="s">
          <Text fontFamily="SemiBold" fontSize={15}>
            Dr. Anne Marie NAPOLI
          </Text>
          <Text lineHeight={18}>
            Médecin généraliste
          </Text>
        </Box>
      </Box>

      <Box marginBottom="s">
        <Text color="primaryDark">
          3 rue du Maréchal Foch
        </Text>
        <Text color="primaryDark">
          66000, Perpignan
        </Text>
      </Box>

      <Chip label="Conventionné secteur 1" color={ChipColors.Green} />

      <SearchSuggestionItemAvailabilities {...{ variant }} />

      <Pressable
        padding="s"
        borderWidth={1}
        borderColor="border"
        marginTop="sToStoM"
        borderRadius="s"
      >
        <Text
          textAlign="center"
          fontFamily="SemiBold"
        >
          Voir plus
        </Text>
      </Pressable>
    </Pressable>
  )
}