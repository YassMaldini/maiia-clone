import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, RefObject } from "react";
import Box from "../../../designSystem/Box/Box";
import BottomModal from "../../../commons/BottomModal/BottomModal";
import Text from "../../../designSystem/Text/Text";
import TextInput from "../../../designSystem/TextInput/TextInput";
import SearchSuggestionsAction from "../SearchSuggestionsAction/SearchSuggestionsAction";
import HouseIcon from "../../../../../assets/svg/house-regular.svg"
import LocationArrowIcon from "../../../../../assets/svg/location-arrow.svg"
import { popularSearch } from "../SearchSuggestionsScreen.data";
import { TouchableOpacity } from "react-native";

export default forwardRef<BottomSheetModal>((_, ref) => {
  return (
    <BottomModal ref={ref} snapPoints={['45%', '100%']} enableDynamicSizing>
      <Box paddingVertical="sToStoM" paddingHorizontal="sToM">
        <Text
          fontFamily="SemiBold"
          fontWeight="900"
          fontSize={24}
          textAlign="center"
        >
          Où recherchez-vous ?
        </Text>
        <Box marginTop="sToM">
          <TextInput
            placeholder="Rechercher une ville / adresse"
            onFocus={() => {
              (ref as RefObject<BottomSheetModal>).current?.snapToIndex(1)
            }}
          />
          <Box marginTop="sToStoM">
            <SearchSuggestionsAction icon={HouseIcon} topText="Mon adresse:" bottomText="Compléter" />
            <SearchSuggestionsAction icon={LocationArrowIcon} topText="Ma position:" bottomText="Rechercher" />
          </Box>
        </Box>
        <Box marginTop="xs">
          <Text variant="label">
            Recherches populaires
          </Text>
          <Box
            flexDirection="row"
            flexWrap="wrap"
            gap="sToM"
            paddingTop="xxs"
          >
            {popularSearch.map(({ label, value }, index) => (
              <TouchableOpacity
                key={index}
                style={{ flex: 2, minWidth: '45%' }}
              >
                <Text>{label}</Text>
              </TouchableOpacity>
            ))}
          </Box>
        </Box>
      </Box>
    </BottomModal>
  )
})