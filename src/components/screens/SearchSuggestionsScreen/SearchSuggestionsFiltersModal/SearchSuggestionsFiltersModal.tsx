import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useState } from "react";
import BottomModal from "../../../commons/BottomModal/BottomModal";
import Box from "../../../designSystem/Box/Box";
import Text from "../../../designSystem/Text/Text";
import Button from "../../../designSystem/Button/Button";
import { ButtonSizes, ButtonVariants } from "../../../designSystem/Button/Button.types";

import VideoSolidIcon from "../../../../../assets/svg/video-solid.svg"
import BuiildingRegularIcon from "../../../../../assets/svg/building-regular.svg"
import HouseSolidIcon from "../../../../../assets/svg/house-solid.svg"
import Switch from "../../../designSystem/Switch/Switch";
import { ScrollView } from "react-native";

export default forwardRef<BottomSheetModal>((_, ref) => {

  const [allowNewPatient, setAllowNewPatient] = useState(false)

  return (
    <BottomModal ref={ref} snapPoints={['91%']} enableDynamicSizing>
      <ScrollView style={{ flex: 1 }}>
        <Box paddingVertical="sToStoM" paddingHorizontal="sToM">
          <Text
            fontFamily="SemiBold"
            fontWeight="900"
            fontSize={24}
            textAlign="center"
          >
            Filtres
          </Text>

          <Box marginTop="m">
            <Text variant="label">
              Mode de consultation
            </Text>
            <Box marginTop="s">
              <Box flexDirection="row">
                <Button
                  icon={VideoSolidIcon}
                  label="En vidéo"
                  variant={ButtonVariants.Outlined}
                  marginRight="s"
                />
                <Button
                  icon={BuiildingRegularIcon}
                  label="Au cabinet"
                  variant={ButtonVariants.Contained}
                />
              </Box>
              <Box flexDirection="row" marginTop="sToStoM">
                <Button
                  icon={HouseSolidIcon}
                  label="Visite à domicile"
                  variant={ButtonVariants.Outlined}
                  marginRight="s"
                />
              </Box>
            </Box>
          </Box>

          <Box marginTop="m">
            <Text variant="label">
              Disponibilités
            </Text>
            <Box marginTop="s" flexDirection="row">
              <Button
                label="Aujourd'hui"
                variant={ButtonVariants.Outlined}
                marginRight="s"
              />
              <Button
                label="Avant 3 jours"
                variant={ButtonVariants.Outlined}
                marginRight="s"
              />
              <Button
                label={`Avant le ...`}
                variant={ButtonVariants.Outlined}
                marginRight="s"
              />
            </Box>
          </Box>

          <Box marginTop="m">
            <Text variant="label">
              Accéssibilité
            </Text>
            <Box marginTop="s">
              <Switch
                label="Ouvert aux nouveaux patients"
                onValueChange={() => setAllowNewPatient(value => !value)}
                value={allowNewPatient}
              />
            </Box>
          </Box>

          <Box marginTop="sToM">
            <Text variant="label">
              Honoraires et tarifications
            </Text>
            <Box marginTop="s" rowGap="xxs">
              <Switch
                label="Sans dépassements d'honoraires"
                onValueChange={() => setAllowNewPatient(value => !value)}
                value={allowNewPatient}
              />
              <Switch
                label="Applique le tiers payant"
                onValueChange={() => setAllowNewPatient(value => !value)}
                value={allowNewPatient}
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>

      <Box
        flexDirection="row"
        padding="sToM"
        columnGap="sToM"
      >
        <Button 
          flex={1}
          label="Réinitialiser"
          size={ButtonSizes.Large}
          variant={ButtonVariants.Text}
          color="textPrimary"
        />
        <Button 
          flex={1}
          label="Afficher"
          size={ButtonSizes.Large}
          variant={ButtonVariants.Contained}
        />
      </Box>
    </BottomModal>
  )
})