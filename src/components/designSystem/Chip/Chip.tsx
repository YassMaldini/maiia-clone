import Box from "../Box/Box"
import Text from "../Text/Text"
import { getChipColor } from "./Chip.theme"
import { ChipColors, ChipProps } from "./Chip.types"

export default ({ label, color = ChipColors.Primary, textProps }: ChipProps) => {

  const { text, background } = getChipColor({ color })

  return (
    <Box 
      paddingHorizontal="s"
      alignSelf="flex-start" 
      backgroundColor={background}
      borderRadius="xs"
    >
      <Text 
        color={text} 
        fontFamily="SemiBold" 
        letterSpacing={0.1} 
        fontSize={13}
        {...textProps}
      >
        {label}
      </Text>
    </Box>
  )
}