import Box from "../../../designSystem/Box/Box"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../designSystem/Text/Text"
import { PractitionerCardProps } from "./PractitionerCard.types"

export default ({ 
  icon: Icon, 
  title, 
  children, 
  ...props 
}: PractitionerCardProps) => {

  return (
    <Box
      flexDirection="row"
      padding="sToStoM"
      borderWidth={1}
      borderColor="border"
      backgroundColor="surface"
      borderRadius="m"
      columnGap="sToStoM"
      marginBottom="sToStoM"
      {...props}
    >
      <Box>
        <SvgIcon 
          icon={Icon}
          width={14}
          height={14}
          color="primary"
        />
      </Box>
      <Box flex={1}>
        <Text 
          fontFamily="SemiBold" 
          color="primary" 
          fontSize={16}
          lineHeight={20}
          marginBottom="xs"
        >
          {title}
        </Text>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}