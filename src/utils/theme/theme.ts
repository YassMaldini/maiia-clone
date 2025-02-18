import { createTheme } from '@shopify/restyle';
import { LIGHT_COLORS } from './colors/light';
import { borderRadii, breakpoints, spacing, textVariants } from './theme.data';

const getTheme = () =>
  createTheme({
    colors: LIGHT_COLORS,
    spacing,
    borderRadii,
    breakpoints,
    textVariants,
  });

export default getTheme;

export type Theme = ReturnType<typeof getTheme>;
