import { api } from "../../api";
import { AvailabilitiesQueryResponse, AvailabilitiesQueryParams } from "./useAvailabilities.types";

const PREFIX = '[queryAvailabilities]';

export const queryAvailabilities = async (params: AvailabilitiesQueryParams) => {
  console.log(PREFIX, `Fetching availabilities...`);

  const response = await api.get<AvailabilitiesQueryResponse>(`/pat-public/hcd/v2/availabilities`, params)

  const { ok, data } = response;
  
  if (!ok || !data) {
    const error = response.data;
    throw error;
  }

  console.log(PREFIX, `Received response.`);
  return data;
};
