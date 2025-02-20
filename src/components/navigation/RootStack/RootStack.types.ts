export interface RootContextProps {}

export type RootStackParamsList = {
  [RootStackList.HomeStack]: undefined;
  [RootStackList.SearchStack]: undefined;
};

export enum RootStackList {
  HomeStack = 'HomeStack',
  SearchStack = 'SearchStack',
}