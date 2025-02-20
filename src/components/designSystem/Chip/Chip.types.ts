import { Theme } from "../../../utils/theme/theme";
import TextProps from "../Text/Text.types";

export interface ChipProps {
  label: string;
  color?: ChipColors;
  textProps?: TextProps;
}

export enum ChipColors {
  Primary = "primary",
  Secondary = "secondary",
  Neutral = 'neutral',
  Green = 'green',
  Red = 'red'
}

export type ChipColorsData = {
  [color in ChipColors]: keyof Theme['colors'];
}