import { TouchableOpacity } from "react-native"
import { SearchOtherSpacialityButtonProps } from "./SearchOtherSpacialityButton.types"
import Box from "../../../designSystem/Box/Box"
import Text from "../../../designSystem/Text/Text"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import ChevronRightIcon from "../../../../../assets/svg/chevron-right.svg"

export default ({ label, ...props }: SearchOtherSpacialityButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Box
        padding="sToStoM"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderWidth={1}
        borderColor="border"
        borderRadius="s"
        marginBottom="s"
      >
        <Text>
          {label}
        </Text>
        <SvgIcon
          icon={ChevronRightIcon}
          width={14}
          height={14}
        />
      </Box>
    </TouchableOpacity>
  )
}