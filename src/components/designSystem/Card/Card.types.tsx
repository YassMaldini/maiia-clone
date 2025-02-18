import { BoxProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { Theme } from "../../../utils/theme/theme";
import TextProps from "../Text/Text.types";

export interface CardProps extends BoxProps<Theme> {
  image?: ReactNode;
  text: string;
  textProps?: TextProps;
  horinzontal?: boolean;
}