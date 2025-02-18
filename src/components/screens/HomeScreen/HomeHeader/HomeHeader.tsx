import Box from "../../../designSystem/Box/Box"
import LogoImage from "../../../../../assets/svg/logo-maiia-monochrome.svg"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import { calculateHeight } from "../../../../utils/image/calculateHeight"
import Text from "../../../designSystem/Text/Text"
import SearchIcon from "../../../../../assets/svg/magnifying-glass-regular.svg"
import TextInput from "../../../designSystem/TextInput/TextInput"

export default () => {

  const { colors } = useTheme<Theme>()

  const LOGO_WIDTH = 95

  return (
    <Box
      paddingTop="xxl"
      paddingBottom="xl"
      paddingHorizontal="m"
      alignItems="center"
      position="relative"
      style={{
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 600
        }}
      />
      <Box style={{
        transform: [{ scaleX: 0.5 }],
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <SvgIcon
          icon={LogoImage}
          width={LOGO_WIDTH}
          height={calculateHeight(LOGO_WIDTH, '250:83')}
          marginBottom="sToM"
        />
        <Text 
          fontFamily="SemiBold"
          fontSize={20}
          color="white"
          textAlign="center"
          marginBottom="sToM"
        >
          Rendez-vous et téléconsultation avec vos professionnels de santé
        </Text>
        <TextInput 
          startIcon={SearchIcon}
          placeholder="Practicien, spécialté, établissement..."
        />
      </Box>
    </Box>
  )
}