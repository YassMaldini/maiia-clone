import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  composeRestyleFunctions,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
  useRestyle,
  useTheme,
} from '@shopify/restyle';
import { forwardRef, useMemo } from 'react';
import { TextInputprops } from './TextInput.types';
import { TextInput as RNTextInput } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import Box from '../Box/Box';
import { SvgIcon } from '../SvgIcon/SvgIcon';

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme>;

const TextInput = forwardRef<RNTextInput, TextInputprops>(({ startIcon, endIcon, boxProps, ...rest }, ref) => {

  const theme = useTheme<Theme>()
  
  const restyleFunctions = composeRestyleFunctions<Theme, TextInputprops>([
    spacing,
    layout,
    border,
    color,
    backgroundColor,
    typography,
  ]);

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const Component = useMemo(() => {
    return createRestyleComponent<RestyleProps, Theme>(
      [spacing, layout, border, backgroundColor, color, typography],
      RNTextInput
    );
  }, []);

  return (
    <Box
      borderRadius="xxl"
      flexDirection="row"
      alignItems="center"
      backgroundColor="background"
      {...boxProps}
    >
      {startIcon &&
        <SvgIcon 
          icon={startIcon}
          color="primaryDark"
          width={16}
          height={16}
          marginLeft="sToM"
          marginRight="sToStoM"
        />
      }
      <Component
        paddingHorizontal={startIcon ? "none" : "sToM"}
        paddingVertical="sToStoM"
        color="textPrimary"
        placeholderTextColor={theme.colors.textSecondary}
        fontSize={15}
        // fontFamily="Italic"
        flex={1}
        {...rootProps}
        {...{ ref }}
      />
      {endIcon &&
        <SvgIcon 
          icon={endIcon}
          width={16}
          height={16}
        />
      }
    </Box>
  );
});

export default TextInput;