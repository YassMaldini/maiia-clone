import { SearchQueryHit } from "../../api/mutations/search/search.types";
import { AvailabilitiesQueryResponseItem } from "../../api/queries/useAvailabilities/useAvailabilities.types";

export type SearchStackParamsList = {
  [SearchStackScreenList.SearchScreen]: undefined;
  [SearchStackScreenList.SearchSuggestionsScreen]: { searchHit: Omit<SearchQueryHit, '_highlightResult'> };
  [SearchStackScreenList.PractitionerScreen]: { 
    item: AvailabilitiesQueryResponseItem,
    practitionerId: string, 
    rootCenterId: string 
  };
};

export enum SearchStackScreenList {
  SearchScreen = 'SearchScreen',
  SearchSuggestionsScreen = 'SearchSuggestionsScreen',
  PractitionerScreen = 'PractitionerScreen',
}