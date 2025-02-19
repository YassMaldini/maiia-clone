import { Theme } from "../../../utils/theme/theme";
import { PressableProps } from "../Pressable/Pressable.types";
import TextProps from "../Text/Text.types";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./Button.types";

type ButtonStyle = {
  base?: PressableProps,
  content: TextProps
}

export function getButtonStyle(
  { variant = ButtonVariants.Outlined, size, color = 'primary' }: 
  Pick<ButtonProps, 'variant' | 'size' | 'color'>
): ButtonStyle {
  switch (variant) {
    case ButtonVariants.Outlined:
      return {
        base: {
          ...(
            size === ButtonSizes.Small
              ?
              {
                borderRadius: 'l',
                paddingHorizontal: 'sToStoM',
                style: {
                  paddingVertical: 5
                }
              }
              :
              {
                borderRadius: 'xxl',
                paddingHorizontal: 'm',
                paddingVertical: 'sToM'
              }
          )
        },
        content: {
          color: color,
          ...(size === ButtonSizes.Large && {
            fontSize: 16
          })
        }
      }
    case ButtonVariants.Text:
      return {
        base: {
          borderColor: 'transparent',
          ...(
            size === ButtonSizes.Small
              ?
              {
                borderRadius: 'l',
                paddingHorizontal: 'sToStoM',
                style: {
                  paddingVertical: 5
                }
              }
              :
              {
                borderRadius: 'xxl',
                paddingHorizontal: 'm',
                paddingVertical: 'sToM'
              }
          )
        },
        content: {
          color: color,
          ...(size === ButtonSizes.Large && {
            fontSize: 16
          })
        }
      }
    case ButtonVariants.Contained:
      return {
        base: {
          backgroundColor: color,
          ...(
            size === ButtonSizes.Small
              ?
              {
                borderRadius: 'l',
                paddingHorizontal: 'sToStoM',
                style: {
                  paddingVertical: 5
                }
              }
              :
              {
                borderRadius: 'xxl',
                paddingHorizontal: 'm',
                paddingVertical: 'sToM'
              }
          )
        },
        content: {
          color: 'white',
          ...(size === ButtonSizes.Large && {
            fontSize: 16
          })
        }
      }
  }
}