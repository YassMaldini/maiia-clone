import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface SearchSpecialityCardProps extends TouchableOpacityProps {
  icon: React.FC<SvgProps>;
  label: string;
}