import { useCallback } from "react";
import Box from "../../../../designSystem/Box/Box";
import { SearchSuggestionItemAvailabilitiesProps, SearchSuggestionItemAvailabilitiesVariants } from "./SearchSuggestionItemAvailabilities.types";
import Text from "../../../../designSystem/Text/Text";
import moment from "moment";

export default ({ item, variant }: SearchSuggestionItemAvailabilitiesProps) => {

  const Content = useCallback(() => {
    switch (variant) {
      case SearchSuggestionItemAvailabilitiesVariants.FollowingDays:
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
            {item.availabilities?.map(({ firstAvailability, lastAvailability }, index) => (
              <Box
                key={index}
                flex={1}
                // rowGap="sToStoM"
                style={{
                  rowGap: 10
                }}
              >
                <Box alignItems="center">
                  <Text fontFamily="SemiBold">{moment(firstAvailability).format('ddd')}</Text>
                  <Text>{moment(firstAvailability).format('DD/MM')}</Text>
                </Box>
                <Box
                  backgroundColor="primaryLight"
                  padding="xs"
                  alignItems="center"
                  borderRadius="m"
                >
                  <Text fontFamily="SemiBold">
                    {firstAvailability ? moment(firstAvailability).format('HH:mm') : '-'}
                  </Text>
                </Box>
                <Box
                  backgroundColor="primaryLight"
                  padding="xs"
                  alignItems="center"
                  borderRadius="m"
                >
                  <Text fontFamily="SemiBold">
                    {lastAvailability ? moment(lastAvailability).format('HH:mm') : '-'}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        )
      case SearchSuggestionItemAvailabilitiesVariants.Shortly:
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
            <Text fontFamily="SemiBold" fontSize={16}>{moment(item.nextAvailability).format('dddd DD MMM')}</Text>
          </Box>
        )
      case SearchSuggestionItemAvailabilitiesVariants.NotAvailable:
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
    }
  }, [item, variant])

  return (
    <Content />
  )
}