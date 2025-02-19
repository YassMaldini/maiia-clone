import { BoxProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";
import { Theme } from "../../../../utils/theme/theme";

export interface PractitionerCardProps extends BoxProps<Theme> {
  children: ReactNode;
  title: string;
  icon: React.FC<SvgProps>;
}