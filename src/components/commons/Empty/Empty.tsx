import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { EmptyProps } from "./Empty.types"

export default ({ text }: EmptyProps) => {

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={24}>{text}</Text>
    </Box>
  )
}