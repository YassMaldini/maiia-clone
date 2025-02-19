import { Theme } from "../../../utils/theme/theme";

export interface ChipProps {
  label: string;
  color?: ChipColors;
}

export enum ChipColors {
  Primary = "primary",
  Secondary = "secondary",
  Green = 'green'
}

export type ChipColorsData = {
  [color in ChipColors]: keyof Theme['colors'];
}