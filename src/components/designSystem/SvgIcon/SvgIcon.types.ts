import { BackgroundColorProps, ColorProps, LayoutProps, PositionProps, SpacingProps } from '@shopify/restyle';
import { FC } from 'react';
import { ViewProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import { SvgProps } from 'react-native-svg';

export interface SvgIconProps
  extends ColorProps<Theme>,
    SpacingProps<Theme>,
    LayoutProps<Theme>,
    PositionProps<Theme>,
    BackgroundColorProps<Theme>,
    Pick<ViewProps, 'testID'> {
  icon: FC<SvgProps>;
}
