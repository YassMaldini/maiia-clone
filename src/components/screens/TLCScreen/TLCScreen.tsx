import Empty from "../../commons/Empty/Empty"
import Box from "../../designSystem/Box/Box"

export default () => {
  return (
    <Box flex={1} backgroundColor="background">
      <Empty text="Cette page n'existe pas" />
    </Box>
  )
}