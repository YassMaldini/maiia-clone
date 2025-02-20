import { SearchQueryResponse } from "../../../api/mutations/search/search.types";

export interface ActualSearchViewProps {
  data?: SearchQueryResponse;
  isLoading: boolean;
}