import {
  layout,
  opacity,
  spacing,
  useResponsiveProp,
  useRestyle,
  color,
  composeRestyleFunctions,
  SpacingProps,
  LayoutProps,
  OpacityProps,
  createRestyleComponent,
  ColorProps,
  backgroundColor,
  BackgroundColorProps,
  PositionProps,
  useTheme,
} from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import { SvgIconProps } from './SvgIcon.types';

export const DEFAULT_SVG_ICON_SIZE = 24;

export type RestyleProps = ColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  BackgroundColorProps<Theme>;

export const SvgIcon = ({
  icon: Icon,
  height = DEFAULT_SVG_ICON_SIZE,
  width = DEFAULT_SVG_ICON_SIZE,
  color,
  ...rest
}: SvgIconProps) => {

  const { colors } = useTheme<Theme>()

  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    // color,
  ]);

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const Component = createRestyleComponent<Omit<SvgIconProps, 'icon'>, Theme>(
    [spacing, backgroundColor, layout],
    Icon
  );

  // @ts-ignore
  return <Icon color={colors[color] || colors.textPrimary} {...{ width: width || DEFAULT_SVG_ICON_SIZE, height: height || DEFAULT_SVG_ICON_SIZE, ...rootProps }} />;
};