import { forwardRef } from "react";
import BottomModal from "../../../commons/BottomModal/BottomModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Box from "../../../designSystem/Box/Box";
import Text from "../../../designSystem/Text/Text";
import Button from "../../../designSystem/Button/Button";
import { ButtonSizes, ButtonVariants } from "../../../designSystem/Button/Button.types";

export default forwardRef<BottomSheetModal>((_, ref) => {
  return (
    <BottomModal ref={ref} snapPoints={['30%']} enableDynamicSizing>
      <Box alignItems="center" padding="sToM">
        <Text
          fontFamily="Bold"
          fontSize={24}
          marginBottom="sToM"
        >
          Vous n'êtes pas connecté
        </Text>
        <Text
          textAlign="center"
          fontSize={15}
          marginBottom="sToM"
        >
          Pour accéder à cette fonctionnalité, veuillez vous connecter à votre compte ou en créer un si vous n'en avez pas encore.
        </Text>
        <Box
          flexDirection="row"
          columnGap="sToM"
        >
          <Button
            flex={1}
            label="Créer un compte"
            size={ButtonSizes.Large}
            variant={ButtonVariants.Text}
            color="textPrimary"
          />
          <Button
            flex={1}
            label={`Se connecter`}
            size={ButtonSizes.Large}
            variant={ButtonVariants.Contained}
          />
        </Box>
      </Box>
    </BottomModal>
  )
})