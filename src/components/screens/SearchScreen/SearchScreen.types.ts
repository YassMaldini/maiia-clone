import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchStackParamsList, SearchStackScreenList } from "../../navigation/SearchStack/SearchStack.types";

export type SearchScreenProps = NativeStackScreenProps<SearchStackParamsList, SearchStackScreenList.SearchScreen>;