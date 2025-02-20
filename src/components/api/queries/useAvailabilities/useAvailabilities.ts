import { useQuery } from "@tanstack/react-query";
import { queryAvailabilities } from "./useAvailabilities.query";
import { AvailabilitiesQueryParams, AvailabilitiesQueryResponse } from "./useAvailabilities.types";
import { CustomUseQueryOptions } from "../../../../types/common/queries.types";

export const AVAILABILITIES_QUERY_KEY = 'AVAILABILITIES';

export const useAvailabilities = (params: AvailabilitiesQueryParams, options?: CustomUseQueryOptions) => {
  return useQuery<AvailabilitiesQueryResponse, Error>({ 
    queryKey: [AVAILABILITIES_QUERY_KEY, params], 
    queryFn: () => queryAvailabilities(params), 
    ...options
  });
};