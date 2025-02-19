import { LinearGradient } from "expo-linear-gradient"
import Box from "../../designSystem/Box/Box"
import { SafeAreaView } from "react-native-safe-area-context"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { Dimensions, Image, ScrollView } from "react-native"
import Text from "../../designSystem/Text/Text"
import Button from "../../designSystem/Button/Button"
import { ButtonSizes, ButtonVariants } from "../../designSystem/Button/Button.types"
import PractitionerCard from "./PractitionerCard/PractitionerCard"

import CalendarIcon from "../../../../assets/svg/calendar-day.svg"
import StethoscopeIcon from "../../../../assets/svg/stethoscope-solid.svg"
import BuildingIcon from "../../../../assets/svg/building-regular.svg"
import CreditCardIcon from "../../../../assets/svg/credit-card-regular.svg"
import InfoIcon from "../../../../assets/svg/circle-info.svg"
import ClockIcon from "../../../../assets/svg/clock-regular.svg"
import Chip from "../../designSystem/Chip/Chip"
import { ChipColors } from "../../designSystem/Chip/Chip.types"
import Pressable from "../../designSystem/Pressable/Pressable"

export default () => {

  const { colors } = useTheme<Theme>()

  return (
    <Box flex={1}>
      <LinearGradient
        colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 400
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          stickyHeaderIndices={[1]}
          nestedScrollEnabled
        >
          <Box alignItems="center" paddingVertical="sToM">
            <Image
              source={{ uri: 'https://api-pat.maiia.com/pat-public/files/8358ff47-c796-4ab7-9cfe-fdac1345fe26-pharmacie-sainte-anne-lyon.png' }}
              width={94}
              height={94}
              borderRadius={50}
            />
          </Box>
          <LinearGradient
            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              position: 'relative'
            }}
          >
            <Box paddingBottom="mToL">
              <Text
                fontFamily="SemiBold"
                fontSize={20}
                textAlign="center"
                color="white"
              >
                Dr. Anne Marie NAPOLI
              </Text>
              <Text
                fontSize={15}
                textAlign="center"
                color="white"
              >
                Médecin généraliste
              </Text>
            </Box>
            <Box
              flexDirection="row"
              position="absolute"
              bottom={-(56 / 2)}
              width={Dimensions.get('window').width}
              justifyContent="center"
            >
              <Button
                label="Prendre rendez-vous"
                icon={CalendarIcon}
                color="secondary"
                variant={ButtonVariants.Contained}
                size={ButtonSizes.Large}
                height={56}
              />
            </Box>
          </LinearGradient>
          <Box
            flex={1}
            backgroundColor="background"
            borderTopLeftRadius="m"
            borderTopRightRadius="m"
            padding="sToM"
            minHeight={Dimensions.get('window').height}
          >
            <ScrollView style={{ flex: 1 }}>
              <Box flex={1} paddingTop="m">

                <PractitionerCard icon={CalendarIcon} title="Prochaine disponibilité">
                  <Text fontSize={16}>Le lundi 17 février 2025</Text>
                </PractitionerCard>

                <PractitionerCard icon={StethoscopeIcon} title="Expertises">
                  <Chip
                    label="Consultation de médecine générale"
                    color={ChipColors.Neutral}
                  />
                </PractitionerCard>

                <PractitionerCard icon={BuildingIcon} title="Accès">
                  <Box marginBottom="s">
                    <Text
                      fontFamily="SemiBold"
                      textDecorationLine="underline"
                      marginBottom="xs"
                    >
                      Maison de santé de Perpignan
                    </Text>
                    <Text>
                      3 rue du Mérachal Foch, 66000 Perpignan
                    </Text>
                  </Box>
                  <Box>
                    <Text fontFamily="SemiBold">
                      Informations Pratiques
                    </Text>
                    <Text>
                      Accès personnes à mobilité réduite: Oui
                    </Text>
                    <Text>
                      Ascenseur: Oui
                    </Text>
                    <Text>
                      Etage: 1
                    </Text>
                  </Box>
                </PractitionerCard>

                <PractitionerCard icon={CreditCardIcon} title="Tarifs et remboursements">
                  <Box flexDirection="row" columnGap="s" marginBottom="sToStoM">
                    {[...Array(3)].map((_, index) => (
                      <Chip
                        key={index}
                        label="Carte vitale"
                        color={ChipColors.Neutral}
                      />
                    ))}
                  </Box>
                  <Box>
                    <Text fontSize={16} marginBottom="s">
                      Moyen de paiement
                    </Text>
                    <Box flexDirection="row" columnGap="s" marginBottom="sToStoM">
                      {[...Array(3)].map((_, index) => (
                        <Chip
                          key={index}
                          label="Carte vitale"
                          color={ChipColors.Neutral}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize={16} marginBottom="s">
                      Tarif par acte
                    </Text>
                    <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                      <Text flex={1}>consultation enfant de 0 à 6 ans</Text>
                      <Text fontFamily="SemiBold">35€</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                      <Text flex={1}>consultation enfant de plus de 6 ans</Text>
                      <Text fontFamily="SemiBold">35€</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                      <Text flex={1}>consultation adultes</Text>
                      <Text fontFamily="SemiBold">35€</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                      <Text flex={1}>visite à domicile</Text>
                      <Text fontFamily="SemiBold">35€</Text>
                    </Box>
                  </Box>
                </PractitionerCard>

                <PractitionerCard icon={InfoIcon} title="Informations">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, similique officiis assumenda dolores distinctio nostrum ad asperiores ratione accusantium reprehenderit veritatis cumque, quos numquam nihil fugit ut accusamus pariatur.
                  </Text>
                </PractitionerCard>

                <PractitionerCard icon={ClockIcon} title="Horaires de contact" marginBottom="none" paddingBottom="none">
                  <Box marginBottom="sToM">
                    <Text fontFamily="SemiBold" marginBottom="s">
                      Horaires d'ouverture
                    </Text>
                    <Box marginBottom="sToM">
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Lundi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Mardi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Mercredi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Jeudi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Vendredi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                      <Box flexDirection="row" justifyContent="space-between" marginBottom="xs">
                        <Text flex={1}>Samedi</Text>
                        <Text>08:00 - 19:00</Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text fontFamily="SemiBold" marginBottom="xs">
                        Numéro de téléphone
                      </Text>
                      <Pressable>
                        <Text fontFamily="SemiBold" color="primaryGradientEnd" textDecorationLine="underline">
                          04 68 51 50 23
                        </Text>
                      </Pressable>
                    </Box>
                  </Box>
                </PractitionerCard>

              </Box>
            </ScrollView>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>)
}