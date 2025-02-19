import { useCallback } from "react";
import Box from "../../../../designSystem/Box/Box";
import { SearchSuggestionItemAvailabilitiesProps } from "./SearchSuggestionItemAvailabilities.types";
import { SearchSuggestionItemVariants } from "../SearchSuggestionItem.types";
import Text from "../../../../designSystem/Text/Text";
import moment from "moment";

export default ({ variant }: SearchSuggestionItemAvailabilitiesProps) => {

  const Content = useCallback(() => {
    switch (variant) {
      case SearchSuggestionItemVariants.FollowingDays:
        return (
          <Box 
            flexDirection="row" 
            justifyContent="space-between" 
            columnGap="s" 
            marginTop="sToStoM"
          >
            <Box justifyContent="flex-end" rowGap="sToStoM">
              <Box padding="xs">
                <Text fontSize={13}>A partir de</Text>
              </Box>
              <Box padding="xs">
                <Text fontSize={13}>Jusqu'à</Text>
              </Box>
            </Box>
            {[...(Array(3))].map((_, index) => (
              <Box 
                key={index} 
                flex={1} 
                // rowGap="sToStoM"
                style={{
                  rowGap: 10
                }}
              >
                <Box alignItems="center">
                  <Text fontFamily="SemiBold">{moment().add(index, 'days').format('ddd')}</Text>
                  <Text>{moment().add(index, 'days').format('DD/MM')}</Text>
                </Box>
                <Box
                  backgroundColor="primaryLight"
                  padding="xs"
                  alignItems="center"
                  borderRadius="m"
                >
                  <Text fontFamily="SemiBold">-</Text>
                </Box>
                <Box
                  backgroundColor="primaryLight"
                  padding="xs"
                  alignItems="center"
                  borderRadius="m"
                >
                  <Text fontFamily="SemiBold">15:45</Text>
                </Box>
              </Box>
            ))}
          </Box>
        )
      case SearchSuggestionItemVariants.Shortly:
        return (
          <Box 
            justifyContent="center" 
            alignItems="center"
            marginTop="sToStoM"
            padding="sToStoM"
            borderWidth={1}
            borderColor="border"
            borderRadius="s"
          >
            <Text marginBottom="xxs">Prochaine disponibilité le :</Text>
            <Text fontFamily="SemiBold" fontSize={16}>lundi 24 févr.</Text>
          </Box>
        )
      case SearchSuggestionItemVariants.NotAvailable:
        return (
          <Box
            justifyContent="center" 
            alignItems="center"
            padding="sToStoM"
            backgroundColor="secondaryLight"
            borderRadius="s"
            marginTop="sToStoM"
          >
            <Text>Pas de rendez-vous en ligne pour ce praticien.</Text>
          </Box>
        )
      default:
        return (
          <Box flexDirection="row"></Box>
        )
    }
  }, [variant])

  return (
    <Content />
  )
}