import { AvailabilitiesQueryResponseItem } from "../../../../api/queries/useAvailabilities/useAvailabilities.types";

export interface SearchSuggestionItemAvailabilitiesProps {
  availabilities: AvailabilitiesQueryResponseItem['availabilities'];
  variant: SearchSuggestionItemAvailabilitiesVariants;
}

export enum SearchSuggestionItemAvailabilitiesVariants {
  FollowingDays = 'FollowingDays',
  Shortly = 'Shortly',
  NotAvailable = 'NotAvailable'
}