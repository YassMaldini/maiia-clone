import {
  ColorProps,
  LayoutProps,
  SpacingProps,
  VariantProps,
  TextProps as RestyleTextProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import { TextProps as RNTextProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';

type TextProps = VariantProps<Theme, 'textVariants'> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  RestyleTextProps<Theme> &
  RNTextProps;

export default TextProps;
