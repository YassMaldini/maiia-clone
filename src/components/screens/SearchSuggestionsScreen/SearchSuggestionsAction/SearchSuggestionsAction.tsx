import { TouchableOpacity } from "react-native"
import Box from "../../../designSystem/Box/Box"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../designSystem/Text/Text"
import { SearchSuggestionsActionProps } from "./SearchSuggestionsAction.types"

export default ({ icon: Icon, topText, bottomText, ...props }: SearchSuggestionsActionProps) => {
  return (
    <TouchableOpacity {...props}>
      <Box flexDirection="row" alignItems="center" marginBottom="s">
        <SvgIcon 
          icon={Icon}
          width={16}
          height={16}
          color="primary"
        />
        <Box marginLeft="sToStoM">
          <Text fontFamily="SemiBold" fontSize={15} color="primary">
            {topText}
          </Text>
          <Text 
            fontFamily="SemiBold" 
            fontSize={14} 
            color="primary"
            letterSpacing={0.3}
          >
            {bottomText}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}