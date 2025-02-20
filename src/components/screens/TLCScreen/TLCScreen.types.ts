import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TLCStackParamsList, TLCStackScreenList } from "../../navigation/TLCStack/TLCStack.types";

export type TLCScreenProps = NativeStackScreenProps<TLCStackParamsList, TLCStackScreenList.TLCScreen>;