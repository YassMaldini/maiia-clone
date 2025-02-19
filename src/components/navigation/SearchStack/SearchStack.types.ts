export type SearchStackParamsList = {
  [SearchStackScreenList.SearchScreen]: undefined;
  [SearchStackScreenList.SearchSuggestionsScreen]: { speciality: string };
  [SearchStackScreenList.PractitionerScreen]: { practitionerId: string };
};

export enum SearchStackScreenList {
  SearchScreen = 'SearchScreen',
  SearchSuggestionsScreen = 'SearchSuggestionsScreen',
  PractitionerScreen = 'PractitionerScreen',
}