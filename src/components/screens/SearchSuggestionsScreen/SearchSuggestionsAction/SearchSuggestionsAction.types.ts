import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface SearchSuggestionsActionProps extends TouchableOpacityProps {
  icon: React.FC<SvgProps>;
  topText: string;
  bottomText: string;
}