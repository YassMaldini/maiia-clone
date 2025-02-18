import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { SafeAreaView } from "react-native-safe-area-context"
import TextInput from "../../designSystem/TextInput/TextInput"
import SearchIcon from "../../../../assets/svg/magnifying-glass-regular.svg"
import Card from "../../designSystem/Card/Card"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import { mostSearchedSpecialities, otherSpecialities } from "./SearchScreen.data"
import { TouchableHighlight, TouchableOpacity } from "react-native"
import SearchSpecialityCard from "./SearchSpecialityCard/SearchSpecialityCard"
import SearchOtherSpacialityButton from "./SearchOtherSpacialityButton/SearchOtherSpacialityButton"

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
        <Box paddingHorizontal="sToM" paddingTop="s" paddingBottom="sToStoM">
          <TextInput
            startIcon={SearchIcon}
            placeholder="Vous recherchez ... ?"
          />
        </Box>

        <Box
          flex={1}
          backgroundColor="background"
          borderTopLeftRadius="m"
          borderTopRightRadius="m"
          padding="sToM"
        >
          <Box marginBottom="sToM">
            <Text variant="label" marginBottom="sToStoM">
              Les plus recherchés
            </Text>
            <Box
              flexDirection="row"
              flexWrap="wrap"
              gap="sToStoM"
            >
              {mostSearchedSpecialities.map(({ icon, label }, index) => (
                <SearchSpecialityCard key={index} {...{ icon, label }} />
              ))}
            </Box>
          </Box>

          <Box>
            <Text variant="label">
              Autres
            </Text>
            <Box>
              {otherSpecialities.map(({ label }, index) => (
                <SearchOtherSpacialityButton key={index} {...{ label }} />
              ))}
            </Box>
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  )
}