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
import { useNavigation } from "@react-navigation/native"
import { HomeScreenProps } from "./HomeScreen.types"
import Pressable from "../../designSystem/Pressable/Pressable"
import { RootStackList } from "../../navigation/RootStack/RootStack.types"
import { useContext } from "react"
import { RootContext } from "../../navigation/RootStack/RootStack.context"

export default () => {

  const { navigate } = useNavigation()

  const { openNotConnectedModal } = useContext(RootContext)

  const { colors, spacing } = useTheme<Theme>()

  const CARD_IMAGE_SIZE = 120

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <Box flex={1}>
        <HomeHeader />

        <Box paddingVertical="mToL" paddingHorizontal="sToM">
          <Box marginBottom="sToM">
            <Text variant="label">
              Avec l'application Maiia
            </Text>
            <ScrollView
              style={{
                paddingHorizontal: spacing.s
              }}
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              <Pressable onPress={() => {
                // @ts-ignore
                navigate(RootStackList.TLCStack)
              }}>
                <Card
                  flex={1}
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
              </Pressable>
              <Pressable onPress={openNotConnectedModal}>
                <Card
                  flex={1}
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
              </Pressable>
              <Pressable onPress={openNotConnectedModal}>
                <Card
                  flex={1}
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
              </Pressable>
            </ScrollView>
          </Box>

          <Box>
            <Text variant="label">
              Mes practiciens
            </Text>
            <Pressable onPress={openNotConnectedModal}>
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
            </Pressable>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  )
}