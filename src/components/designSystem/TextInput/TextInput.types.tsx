import {
  BackgroundColorProps,
  BorderProps,
  BoxProps,
  ColorProps,
  LayoutProps,
  SpacingProps,
  TypographyProps,
} from '@shopify/restyle';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export type TextInputprops = SpacingProps<Theme> &
  LayoutProps<Theme> &
  TypographyProps<Theme> &
  BorderProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  RNTextInputProps & {
    startIcon?: FC<SvgProps>;
    endIcon?: FC<SvgProps>;
    boxProps?: BoxProps<Theme>;
  };
