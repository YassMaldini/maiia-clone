import { Image, TouchableOpacity } from "react-native";
import Box from "../../../designSystem/Box/Box";
import { SearchSuggestionItemProps } from "./SearchSuggestionItem.types";
import Pressable from "../../../designSystem/Pressable/Pressable";
import Text from "../../../designSystem/Text/Text";
import Chip from "../../../designSystem/Chip/Chip";
import { ChipColors } from "../../../designSystem/Chip/Chip.types";
import SearchSuggestionItemAvailabilities from "./SearchSuggestionItemAvailabilities/SearchSuggestionItemAvailabilities";
import { useNavigation } from "@react-navigation/native";
import { SearchSuggestionsScreenProps } from "../SearchSuggestionsScreen.types";
import { SearchStackScreenList } from "../../../navigation/SearchStack/SearchStack.types";
import { SearchSuggestionItemAvailabilitiesVariants } from "./SearchSuggestionItemAvailabilities/SearchSuggestionItemAvailabilities.types";
import { useMemo } from "react";
import PratImage from "../../../../../assets/images/img_prat.png"
import CenterImage from "../../../../../assets/images/img_center.png"

export default ({ item }: SearchSuggestionItemProps) => {

  const { navigate } = useNavigation<SearchSuggestionsScreenProps['navigation']>()

  const displayName = useMemo(() => {
    switch (item.type) {
      case "PRACTITIONER":
        return item.practitioner?.fullName
      case "CENTER":
        return item.center?.name
    }
  }, [item])

  const displayImage = useMemo(() => {
    if (item.avatarPicture) {
      return { uri: `https://api-pat.staging.maiia.com/pat-public/files/${item.avatarPicture?.thumbnailS3Id}` }
    } else {
      switch (item.type) {
        case "PRACTITIONER":
          return PratImage
        case "CENTER":
          return CenterImage
      }
    }
  }, [item]) 

  return (
    <Pressable
      marginBottom="sToM"
      borderWidth={1}
      borderColor="border"
      backgroundColor="surface"
      padding="sToStoM"
      borderRadius="s"
      onPress={() => {
        switch (item.type) {
          case "PRACTITIONER":
            if (item.practitioner && item.center) {
              navigate(SearchStackScreenList.PractitionerScreen, { 
                item,
                practitionerId: item.practitioner.id,
                rootCenterId: item.center.id
              })
            } 
            // else if (item.practitioner) {
            //   navigate(SearchStackScreenList.PractitionerScreen, { 
            //     practitionerId: item.practitioner.id
            //   })
            // }
          // case "CENTER":
          //   navigate(SearchStackScreenList.PractitionerScreen, { practitionerId: 'someId' })
        }
      }}
    >
      <Box flexDirection="row" alignItems="center" marginBottom="s">
        <Image
          source={displayImage}
          width={32}
          height={32}
          borderRadius={16}
          style={{
            width: 32,
            height: 32
          }}
        />
        <Box marginLeft="s">
          <Text fontFamily="SemiBold" fontSize={15}>
            {displayName}
          </Text>
          <Text lineHeight={18}>
            {item.speciality}
          </Text>
        </Box>
      </Box>

      <Box marginBottom="s">
        <Text color="primaryDark">
          {item.address.number ? `${item.address.number} ` : ''}{`${item.address.street}`}
        </Text>
        <Text color="primaryDark">
          {`${item.address.zipCode}, ${item.address.city}`}
        </Text>
      </Box>

      {item.sectors?.includes("SECTOR1_DP_OPTAM") &&
        <Chip label="Conventionné secteur 1" color={ChipColors.Green} />
      }

      <SearchSuggestionItemAvailabilities
        availabilities={item.availabilities}
        variant={SearchSuggestionItemAvailabilitiesVariants.FollowingDays}
      />

      <TouchableOpacity>
        <Box
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
        </Box>
      </TouchableOpacity>
    </Pressable>
  )
}