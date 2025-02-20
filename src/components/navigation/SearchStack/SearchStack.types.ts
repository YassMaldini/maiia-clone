import { SearchQueryHit } from "../../api/mutations/search/search.types";

export type SearchStackParamsList = {
  [SearchStackScreenList.SearchScreen]: undefined;
  [SearchStackScreenList.SearchSuggestionsScreen]: { searchHit: Omit<SearchQueryHit, '_highlightResult'> };
  [SearchStackScreenList.PractitionerScreen]: { practitionerId: string };
};

export enum SearchStackScreenList {
  SearchScreen = 'SearchScreen',
  SearchSuggestionsScreen = 'SearchSuggestionsScreen',
  PractitionerScreen = 'PractitionerScreen',
}