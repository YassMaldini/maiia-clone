import { Alert, Image } from "react-native"
import Box from "../../../designSystem/Box/Box"
import Pressable from "../../../designSystem/Pressable/Pressable"
import PratImage from "../../../../../assets/images/img_prat.png"
import VideoSolidIcon from "../../../../../assets/svg/video-solid.svg"
import Text from "../../../designSystem/Text/Text"
import Chip from "../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../designSystem/Chip/Chip.types"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import { TLCCardProps } from "./TLCCard.types"

export default ({ item }: TLCCardProps) => {

  return (
    <Pressable
      borderWidth={1}
      borderColor="border"
      borderRadius="m"
      padding="sToStoM"
      flexDirection="row"
      marginBottom="sToM"
      onPress={() => {
        // navigate(TLCStackScreenList.PractitionerScreen, {
        //   item,
        //   practitionerId: item.id,
        //   rootCenterId: item.center.id
        // })
        Alert.alert('Lien non fonctionnel')
      }}
    >
      <Box flex={2} justifyContent="flex-start" paddingVertical="s">
        <Box marginBottom="s">
          <Box flexDirection="row" alignItems="center">
            <Image
              source={PratImage}
              width={32}
              height={32}
              borderRadius={16}
              style={{
                width: 32,
                height: 32
              }}
            />
            <Box marginLeft="s">
              <Text fontFamily="SemiBold" fontSize={15}>{item.professional.firstName} {item.professional.lastName}</Text>
              <Text>{item.professional.speciality.name}</Text>
            </Box>
          </Box>
        </Box>
        <Text marginBottom="s">
          {item.publicInformation.address.zipCode}, {item.publicInformation.address.city}
        </Text>
        <Box rowGap="s">
          {item.publicInformation.conventionSectors?.includes("SECTOR1") &&
            <Chip
              label="Conventionné secteur 1"
              color={ChipColors.Green}
            />
          }
        </Box>
      </Box>
      <Box
        flex={1}
        backgroundColor="primaryLight"
        borderRadius="s"
        alignItems="center"
        justifyContent="center"
        paddingVertical="mToL"
        paddingHorizontal="s"
      >
        <Box
          borderRadius="xxl"
          backgroundColor="primaryDark"
          marginBottom="s"
          style={{
            padding: 6
          }}
        >
          <SvgIcon
            icon={VideoSolidIcon}
            color="primaryLight"
            width={10}
            height={10}
          />
        </Box>
        <Text
          fontFamily="SemiBold"
          color="primaryDark"
          fontSize={15}
        >
          Consulter
        </Text>
        {item.waitingRoomPatientNumber &&
          <Text
            fontSize={11}
            color="primaryDark"
            marginTop="xs"
          >
            Attente: <Text fontSize={11} fontFamily="SemiBold" color="primaryDark">{`${item.waitingRoomPatientNumber} patient`}</Text>
          </Text>
        }
      </Box>
    </Pressable>
  )
}