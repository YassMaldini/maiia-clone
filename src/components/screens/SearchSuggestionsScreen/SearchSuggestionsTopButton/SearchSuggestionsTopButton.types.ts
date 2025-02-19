import { SvgProps } from "react-native-svg";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface SearchSuggestionsTopButtonProps extends PressableProps {
  icon: React.FC<SvgProps>;
  label: string;
}