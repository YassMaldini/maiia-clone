import Box from "../Box/Box"
import Text from "../Text/Text"
import { CardProps } from "./Card.types"

export default ({ 
  image: Image, 
  text, 
  textProps,
  horinzontal, 
  ...props 
}: CardProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor="border"
      borderRadius="s"
      paddingVertical="s"
      paddingHorizontal="xxs"
      alignItems="center"
      {...(horinzontal && {
        flexDirection: 'row',
      })}
      {...props}
    >
      {Image &&
        <Box>{Image}</Box>
      }
      <Box {...(horinzontal && { flex: 1 })}>
      <Text
        textAlign={horinzontal ? 'left' : 'center'}
        fontFamily="SemiBold"
        fontWeight="700"
        fontSize={13}
        lineHeight={18}
        overflow="visible"
        numberOfLines={3}
        ellipsizeMode="tail"
        {...textProps}
      >
        {text}
      </Text>
      </Box>
    </Box>
  )
}