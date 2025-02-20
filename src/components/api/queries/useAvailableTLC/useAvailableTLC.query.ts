import { api } from "../../api";
import { AvailableTLCQueryResponse } from "./useAvailableTLC.types";

const PREFIX = '[queryAvailableTLC]';

export const queryAvailableTLC = async () => {
  console.log(PREFIX, `Fetching Available TLCs...`);

  const response = await api.get<AvailableTLCQueryResponse>(`/pat-public/hcd/tlc/immediate`, {
    limit: 20,
    distanceMax: 20000
  })

  const { ok, data } = response;

  if (!ok || !data) {
    const error = response.data;
    throw error;
  }

  console.log(PREFIX, `Received response.`);
  return data;
};
