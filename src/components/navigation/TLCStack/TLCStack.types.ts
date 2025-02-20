import { AvailableTLCQueryResponseItem } from "../../api/queries/useAvailableTLC/useAvailableTLC.types";

export type TLCStackParamsList = {
  [TLCStackScreenList.TLCScreen]: undefined;
  [TLCStackScreenList.PractitionerScreen]: {
    item: AvailableTLCQueryResponseItem,
    practitionerId: string,
    rootCenterId: string
  };
};

export enum TLCStackScreenList {
  TLCScreen = 'TLCScreen',
  PractitionerScreen = 'PractitionerScreen',
}