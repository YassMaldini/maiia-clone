import { Switch } from "react-native"
import Box from "../Box/Box"
import Text from "../Text/Text"
import { SwitchProps } from "./Switch.types"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"

export default ({ label, ...props }: SwitchProps) => {

  const { colors } = useTheme<Theme>()

  return (
    <Box flexDirection="row" alignItems="center">
      <Switch thumbColor={props.value ? colors.primary : colors.secondaryLight} {...props} />
      {label &&
        <Text fontSize={16}>{label}</Text>
      }
    </Box>
  )
}