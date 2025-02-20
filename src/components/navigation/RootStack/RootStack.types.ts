export interface RootContextProps {
  openNotConnectedModal: () => void;
}

export type RootStackParamsList = {
  [RootStackList.HomeStack]: undefined;
  [RootStackList.SearchStack]: undefined;
  [RootStackList.TLCStack]: undefined;
  [RootStackList.SettingsStack]: undefined;
};

export enum RootStackList {
  HomeStack = 'HomeStack',
  SearchStack = 'SearchStack',
  TLCStack = 'TLCStack',
  SettingsStack = 'SettingsStack',
}