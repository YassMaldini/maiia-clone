import Pressable from "../Pressable/Pressable"
import { SvgIcon } from "../SvgIcon/SvgIcon"
import Text from "../Text/Text"
import { getButtonStyle } from "./Button.theme"
import { ButtonProps, ButtonSizes, ButtonVariants } from "./Button.types"


export default ({ 
  icon: Icon, 
  label, 
  color = 'primary',
  variant = ButtonVariants.Outlined,
  size = ButtonSizes.Small,
  ...props 
}: ButtonProps) => {

  const { base, content } = getButtonStyle({ variant, size, color })

  return (
    <Pressable
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor="primary"
      {...base}
      {...props}
    >
      {Icon &&
        <SvgIcon
          icon={Icon}
          width={16}
          height={16}
          marginRight="s"
          color={content.color}
        />
      }
      <Text
        fontFamily="SemiBold" 
        fontSize={14} 
        letterSpacing={0.3}
        {...content}
      >
        {label}
      </Text>
    </Pressable>
  )
}