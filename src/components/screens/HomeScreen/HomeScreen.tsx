import { Dimensions, ScrollView } from "react-native"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import HomeHeader from "./HomeHeader/HomeHeader"
import Card from "../../designSystem/Card/Card"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"

import TLCImage from "../../../../assets/svg/tlc.svg"
import DataImage from "../../../../assets/svg/data.svg"
import MedicationImage from "../../../../assets/svg/medication.svg"

export default () => {

  const { spacing } = useTheme<Theme>()

  const CARD_IMAGE_SIZE = 120

  return (
    <Box flex={1}>
      <HomeHeader />

      <Box paddingVertical="mToL" paddingHorizontal="sToM">
        <Box marginBottom="sToM">
          <Text
            fontFamily="SemiBold"
            fontSize={18}
            fontWeight="800"
            marginBottom="s"
          >
            Avec l'application Maiia
          </Text>
          <ScrollView
            style={{
              paddingHorizontal: spacing.s
            }}
            horizontal
          >
            <Card
              image={
                <SvgIcon
                  icon={TLCImage}
                  width={CARD_IMAGE_SIZE}
                  height={CARD_IMAGE_SIZE}
                  marginBottom="sToM"
                />
              }
              text="Téléconsultez avec un practicien sans rendez-vous"
              width={CARD_IMAGE_SIZE + 80}
              paddingBottom="m"
            />
            <Card
              image={
                <SvgIcon
                  icon={DataImage}
                  width={CARD_IMAGE_SIZE}
                  height={CARD_IMAGE_SIZE}
                />
              }
              text="Vos documents de santé toujours avec vous en sécurité"
              width={CARD_IMAGE_SIZE + 80}
              paddingBottom="m"
              marginLeft="sToM"
            />
            <Card
              image={
                <SvgIcon
                  icon={MedicationImage}
                  width={CARD_IMAGE_SIZE}
                  height={CARD_IMAGE_SIZE}
                />
              }
              text="Recherchez les informations de vos médicaments"
              width={CARD_IMAGE_SIZE + 80}
              paddingBottom="m"
              paddingHorizontal="m"
              marginLeft="sToM"
            />
          </ScrollView>
        </Box>

        <Box>
          <Text
            fontFamily="SemiBold"
            fontSize={18}
            fontWeight="800"
            marginBottom="s"
          >
            Mes practiciens
          </Text>
          <Card
            image={
              <SvgIcon
                icon={MedicationImage}
                width={CARD_IMAGE_SIZE}
                height={CARD_IMAGE_SIZE}
              />
            }
            text="Consultez les disponibilités de mes practiciens"
            paddingHorizontal="sToM"
            textProps={{
              fontSize: 16,
              marginLeft: 'sToStoM',
              lineHeight: 24
            }}
            horinzontal
          />
        </Box>
      </Box>
    </Box>
  )
}