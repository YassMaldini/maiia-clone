export type SearchStackParamsList = {
  [SearchStackScreenList.SearchScreen]: undefined;
  [SearchStackScreenList.SearchSuggestionsScreen]: { speciality: string };
};

export enum SearchStackScreenList {
  SearchScreen = 'SearchScreen',
  SearchSuggestionsScreen = 'SearchSuggestionsScreen',
}