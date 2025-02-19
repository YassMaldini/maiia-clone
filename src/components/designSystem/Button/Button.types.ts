import { SvgProps } from "react-native-svg";
import { PressableProps } from "../Pressable/Pressable.types";
import { Theme } from "../../../utils/theme/theme";

export interface ButtonProps extends PressableProps {
  icon?: React.FC<SvgProps>;
  label: string;
  color?: keyof Theme['colors'];
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export enum ButtonVariants {
  Outlined = 'Outlined',
  Contained = 'Contained',
  Text = 'Text'
}

export enum ButtonSizes {
  Small = 'Small',
  Large = 'Large'
}