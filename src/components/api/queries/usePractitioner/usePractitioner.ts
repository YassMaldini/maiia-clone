import { useQuery } from "@tanstack/react-query";
import { queryPractitioner } from "./usePractitioner.query";
import { PractitionerQueryParams, PractitionerQueryResponse } from "./usePractitioner.types";
import { CustomUseQueryOptions } from "../../../../types/common/queries.types";

export const PRACTITIONER_QUERY_KEY = 'PRACTITIONER';

export const usePractitioner = (params: PractitionerQueryParams, options?: CustomUseQueryOptions) => {
  return useQuery<PractitionerQueryResponse, Error>({ 
    queryKey: [PRACTITIONER_QUERY_KEY, params], 
    queryFn: () => queryPractitioner(params), 
    ...options
  });
};