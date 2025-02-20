import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchStackParamsList, SearchStackScreenList } from "../../navigation/SearchStack/SearchStack.types";
import { AvailabilitiesQueryParams, AvailabilitiesQueryResponse } from "../../api/queries/useAvailabilities/useAvailabilities.types";

export type SearchSuggestionsScreenProps = NativeStackScreenProps<SearchStackParamsList, SearchStackScreenList.SearchSuggestionsScreen>;

export interface SearchSuggestionsContextProps {
  availabilityFilters: AvailabilitiesQueryParams;
  setAvailabilityFilters: React.Dispatch<React.SetStateAction<AvailabilitiesQueryParams>>;
  availabilities?: AvailabilitiesQueryResponse;
}