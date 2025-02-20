import { useQuery } from "@tanstack/react-query";
import { queryAvailableTLC } from "./useAvailableTLC.query";
import { AvailableTLCQueryResponse } from "./useAvailableTLC.types";
import { CustomUseQueryOptions } from "../../../../types/common/queries.types";

export const AVAILABLE_TLC_QUERY_KEY = 'AVAILABLE_TLC';

export const useAvailableTLC = (options?: CustomUseQueryOptions) => {
  return useQuery<AvailableTLCQueryResponse, Error>({
    queryKey: [AVAILABLE_TLC_QUERY_KEY],
    queryFn: () => queryAvailableTLC(),
    ...options
  });
};