import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useContext, useState } from "react";
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
import { SearchSuggestionsContext } from "../SearchSuggestionsScreen.context";
import { AvailabilityFilterTypes, ConsultationModeFilters, ExtraFeeFilters, NewPatientFilters } from "../../../api/queries/useAvailabilities/useAvailabilities.types";

export default forwardRef<BottomSheetModal>((_, ref) => {

  const { availabilities, availabilityFilters, setAvailabilityFilters } = useContext(SearchSuggestionsContext)

  const [isUselessSwitchEnabled, setUselessSwitchEnabled] = useState(false)

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
                  marginRight="s"
                  variant={
                    availabilityFilters.consultationModeFilter === ConsultationModeFilters.TLC ?
                      ButtonVariants.Contained :
                      ButtonVariants.Outlined
                  }
                  onPress={() => {
                    setAvailabilityFilters(state => ({
                      ...state,
                      consultationModeFilter: availabilityFilters.consultationModeFilter !== ConsultationModeFilters.TLC ?
                        ConsultationModeFilters.TLC :
                        ConsultationModeFilters.ALL
                    }))
                  }}
                />
                <Button
                  icon={BuiildingRegularIcon}
                  label="Au cabinet"
                  variant={
                    availabilityFilters.consultationModeFilter === ConsultationModeFilters.PHYSICAL ?
                      ButtonVariants.Contained :
                      ButtonVariants.Outlined
                  }
                  onPress={() => {
                    setAvailabilityFilters(state => ({
                      ...state,
                      consultationModeFilter: availabilityFilters.consultationModeFilter !== ConsultationModeFilters.PHYSICAL ?
                        ConsultationModeFilters.PHYSICAL :
                        ConsultationModeFilters.ALL
                    }))
                  }}
                />
              </Box>
              <Box flexDirection="row" marginTop="sToStoM">
                <Button
                  icon={HouseSolidIcon}
                  label="Visite à domicile"
                  marginRight="s"
                  variant={
                    availabilityFilters.consultationModeFilter === ConsultationModeFilters.HOME_VISIT ?
                      ButtonVariants.Contained :
                      ButtonVariants.Outlined
                  }
                  onPress={() => {
                    setAvailabilityFilters(state => ({
                      ...state,
                      consultationModeFilter: availabilityFilters.consultationModeFilter !== ConsultationModeFilters.HOME_VISIT ?
                        ConsultationModeFilters.HOME_VISIT :
                        ConsultationModeFilters.ALL
                    }))
                  }}
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
                marginRight="s"
                variant={
                  availabilityFilters["availabilityFilter.type"] === AvailabilityFilterTypes.TODAY ?
                    ButtonVariants.Contained :
                    ButtonVariants.Outlined
                }
                onPress={() => {
                  setAvailabilityFilters(state => ({
                    ...state,
                    "availabilityFilter.type": availabilityFilters["availabilityFilter.type"] !== AvailabilityFilterTypes.TODAY ?
                      AvailabilityFilterTypes.TODAY :
                      AvailabilityFilterTypes.ALL
                  }))
                }}
              />
              <Button
                label="Avant 3 jours"
                marginRight="s"
                variant={
                  availabilityFilters["availabilityFilter.type"] === AvailabilityFilterTypes.THREE_DAY ?
                    ButtonVariants.Contained :
                    ButtonVariants.Outlined
                }
                onPress={() => {
                  setAvailabilityFilters(state => ({
                    ...state,
                    "availabilityFilter.type": availabilityFilters["availabilityFilter.type"] !== AvailabilityFilterTypes.THREE_DAY ?
                      AvailabilityFilterTypes.THREE_DAY :
                      AvailabilityFilterTypes.ALL
                  }))
                }}
              />
              {/* <Button
                label={`Avant le ...`}
                variant={ButtonVariants.Outlined}
                marginRight="s"
              /> */}
            </Box>
          </Box>

          <Box marginTop="m">
            <Text variant="label">
              Accéssibilité
            </Text>
            <Box marginTop="s">
              <Switch
                label="Ouvert aux nouveaux patients"
                onValueChange={() => {
                  setAvailabilityFilters(state => ({
                    ...state,
                    newPatientFilter: state.newPatientFilter === NewPatientFilters.ALL ? 
                      NewPatientFilters.ALLOW :
                      NewPatientFilters.ALL
                  }))
                }}
                value={availabilityFilters.newPatientFilter === NewPatientFilters.ALLOW}
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
                onValueChange={() => {
                  setAvailabilityFilters(state => ({
                    ...state,
                    extraFeeFilter: state.extraFeeFilter === ExtraFeeFilters.ALL ? 
                      ExtraFeeFilters.DISALLOW :
                      ExtraFeeFilters.ALL
                  }))
                }}
                value={availabilityFilters.extraFeeFilter === ExtraFeeFilters.DISALLOW}
              />
              <Switch
                label="Applique le tiers payant"
                onValueChange={() => setUselessSwitchEnabled(value => !value)}
                value={isUselessSwitchEnabled}
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
          label={`Afficher${availabilities ? ` (${availabilities.total})` : ''}`}
          size={ButtonSizes.Large}
          variant={ButtonVariants.Contained}
        />
      </Box>
    </BottomModal>
  )
})