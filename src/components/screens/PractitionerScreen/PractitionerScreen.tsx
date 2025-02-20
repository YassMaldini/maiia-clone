import { LinearGradient } from "expo-linear-gradient"
import Box from "../../designSystem/Box/Box"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { Dimensions, Image, Linking, ScrollView } from "react-native"
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
import ChevronLeftIcon from "../../../../assets/svg/chevron-left-regular.svg"
import StarIcon from "../../../../assets/svg/star-regular.svg"
import { useNavigation, useRoute } from "@react-navigation/native"
import { PractitionerScreenProps } from "./PractitionerScreen.types"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import { usePractitioner } from "../../api/queries/usePractitioner/usePractitioner"
import { Loading } from "../../commons/Loading/Loading"
import { useContext, useEffect, useMemo } from "react"
import moment from "moment"
import { RootContext } from "../../navigation/RootStack/RootStack.context"

export default () => {

  const { params: { item, practitionerId, rootCenterId } } = useRoute<PractitionerScreenProps['route']>()
  const { goBack } = useNavigation<PractitionerScreenProps['navigation']>()

  const { openNotConnectedModal } = useContext(RootContext)

  const { top } = useSafeAreaInsets()

  const { colors, spacing } = useTheme<Theme>()

  const { data, isLoading } = usePractitioner({ practitionerId, rootCenterId })

  useEffect(() => {
    console.log('data', data)
  }, [data])

  const practitioner = useMemo(() => {
    if (data) {
      return data.items[0]
    }
  }, [data])

  if (isLoading) return <Loading />

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

      <Box
        position="absolute"
        top={top + spacing.sToM}
        left={spacing.m}
        zIndex={9}
      >
        <Pressable onPress={goBack}>
          <SvgIcon
            icon={ChevronLeftIcon}
            color="white"
            width={22}
            height={22}
          />
        </Pressable>
      </Box>
      <Box
        position="absolute"
        top={top + spacing.sToM}
        right={spacing.m}
        zIndex={9}
      >
        <Pressable onPress={openNotConnectedModal}>
          <SvgIcon
            icon={StarIcon}
            color="white"
            width={22}
            height={22}
          />
        </Pressable>
      </Box>

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
                {`${practitioner?.professional.firstName} ${practitioner?.professional.lastName}`}
              </Text>
              <Text
                fontSize={15}
                textAlign="center"
                color="white"
              >
                {practitioner?.professional.speciality.name}
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
                onPress={openNotConnectedModal}
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
                  <Text fontSize={16}>Le {moment(item.nextAvailability).format('dddd DD MMMM Y')}</Text>
                </PractitionerCard>

                {(practitioner?.publicInformation.expertises && practitioner?.publicInformation.expertises.length > 0) &&
                  <PractitionerCard icon={StethoscopeIcon} title="Expertises" >
                    <Box flexDirection="row" flexWrap="wrap" gap="s">
                      {practitioner?.publicInformation.expertises.map(({ name }, index) => (
                        <Chip
                          key={index}
                          label={name}
                          color={ChipColors.Neutral}
                        />
                      ))}
                    </Box>
                  </PractitionerCard>
                }

                <PractitionerCard icon={BuildingIcon} title="Accès">
                  <Box marginBottom="s">
                    <Text
                      fontFamily="SemiBold"
                      textDecorationLine="underline"
                      marginBottom="xs"
                    >
                      {practitioner?.center.name}
                    </Text>
                    <Text>
                      {`${practitioner?.publicInformation.address.number || ''} ${practitioner?.publicInformation.address.street}, ${practitioner?.publicInformation.address.zipCode} ${practitioner?.publicInformation.address.city}`}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontFamily="SemiBold">
                      Informations Pratiques
                    </Text>
                    {practitioner?.publicInformation.officeInformation.officeAccessibility?.hasHandicapAccess &&
                      <Text>
                        Accès personnes à mobilité réduite: Oui
                      </Text>
                    }
                    {practitioner?.publicInformation.officeInformation.officeAccessibility?.hasElevatorAccess &&
                      <Text>
                        Ascenseur: Oui
                      </Text>
                    }
                    <Text>
                      Etage: 1
                    </Text>
                  </Box>
                </PractitionerCard>

                <PractitionerCard icon={CreditCardIcon} title="Tarifs et remboursements">
                  <Box flexDirection="row" columnGap="s" marginBottom="sToStoM">
                    {practitioner?.publicInformation.conventionSectors.includes("AFFILIATED") &&
                      <Chip
                        label="Conventionné"
                        color={ChipColors.Neutral}
                      />
                    }
                    <Chip
                      label="Carte vitale"
                      color={
                        practitioner?.publicInformation.refundMethods.includes("VITAL_CARD") ?
                          ChipColors.Neutral :
                          ChipColors.Red
                      }
                      {...(!practitioner?.publicInformation.refundMethods.includes("VITAL_CARD") &&
                      {
                        textProps: {
                          textDecorationLine: 'line-through'
                        }
                      }
                      )}
                    />
                    <Chip
                      label="Tiers payant"
                      color={
                        practitioner?.publicInformation.refundMethods.includes("THIRD_PARTY_PAYER") ?
                          ChipColors.Neutral :
                          ChipColors.Red
                      }
                      {...(!practitioner?.publicInformation.refundMethods.includes("THIRD_PARTY_PAYER") &&
                        { textProps: { textDecorationLine: 'line-through' } }
                      )}
                    />
                  </Box>
                  <Box>
                    <Text fontSize={16} marginBottom="s">
                      Moyen de paiement
                    </Text>
                    <Box flexDirection="row" columnGap="s" marginBottom="sToStoM">
                      <Chip
                        label="CB"
                        color={
                          practitioner?.publicInformation.paymentMethods.find(value => value === 'CB') ?
                            ChipColors.Neutral :
                            ChipColors.Red
                        }
                        {...(!practitioner?.publicInformation.paymentMethods.find(value => value === 'CB') &&
                          { textProps: { textDecorationLine: 'line-through' } }
                        )}
                      />
                      <Chip
                        label="Espèce"
                        color={
                          practitioner?.publicInformation.paymentMethods.find(value => value === 'CASH') ?
                            ChipColors.Neutral :
                            ChipColors.Red
                        }
                        {...(!practitioner?.publicInformation.paymentMethods.find(value => value === 'CASH') &&
                          { textProps: { textDecorationLine: 'line-through' } }
                        )}
                      />
                      <Chip
                        label="Chèques"
                        color={
                          practitioner?.publicInformation.paymentMethods.find(value => value === 'CHECK') ?
                            ChipColors.Neutral :
                            ChipColors.Red
                        }
                        {...(!practitioner?.publicInformation.paymentMethods.find(value => value === 'CHECK') &&
                          { textProps: { textDecorationLine: 'line-through' } }
                        )}
                      />
                    </Box>
                  </Box>
                  {(practitioner?.publicInformation.pricing && practitioner?.publicInformation.pricing.length > 0) &&
                    <Box>
                      <Text fontSize={16} marginBottom="s">
                        Tarif par acte
                      </Text>
                      <Box>
                        {practitioner?.publicInformation.pricing.map(({ label, price }, index) => (
                          <Box key={index} flexDirection="row" justifyContent="space-between" marginBottom="s">
                            <Text flex={1}>{label}</Text>
                            <Text fontFamily="SemiBold">{price}€</Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  }
                </PractitionerCard>

                {practitioner?.publicInformation.officeDescription &&
                  <PractitionerCard icon={InfoIcon} title="Informations">
                    <Text>{practitioner?.publicInformation.officeDescription}</Text>
                  </PractitionerCard>
                }

                <PractitionerCard icon={ClockIcon} title="Horaires de contact" marginBottom="none" paddingBottom="none">
                  <Box marginBottom="sToM">
                    <Text fontFamily="SemiBold" marginBottom="s">
                      Horaires d'ouverture
                    </Text>
                    <Box marginBottom="sToM">
                      {[...Array(7)].map((_, index) => {
                        const formattedDay = moment().locale('en').isoWeekday(index + 1).format('dddd').toUpperCase()
                        if (practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].isActive) {
                          return (
                            <Box key={index} flexDirection="row" justifyContent="space-between" marginBottom="s">
                              <Text flex={1}>{moment().isoWeekday(index + 1).format('dddd')}</Text>
                              {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 0) &&
                                <Text>
                                  {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 0)?.startTime}
                                  {' - '}
                                  {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 0)?.endTime}
                                </Text>
                              }
                              {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 1) &&
                                <Text>
                                  {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 0) && ' / ' }
                                  {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 1)?.startTime}
                                  {' - '}
                                  {practitioner?.publicInformation.officeInformation.openingSchedules[formattedDay].schedules.find(({ position }) => position === 1)?.endTime}
                                </Text>
                              }
                            </Box>
                          )
                        }
                      })}
                    </Box>
                    <Box>
                      <Text fontFamily="SemiBold" marginBottom="xs">
                        Numéro de téléphone
                      </Text>
                      <Pressable 
                        onPress={async () => await Linking.openURL(`tel:${practitioner?.publicInformation.officeInformation.phoneNumber}`)}
                      >
                        <Text fontFamily="SemiBold" color="primaryGradientEnd" textDecorationLine="underline">
                          {practitioner?.publicInformation.officeInformation.phoneNumber}
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