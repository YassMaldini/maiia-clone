import { api } from "../../api";
import { PractitionerQueryResponse, PractitionerQueryParams } from "./usePractitioner.types";

const PREFIX = '[queryPractitioner]';

export const queryPractitioner = async (params: PractitionerQueryParams) => {
  console.log(PREFIX, `Fetching Practitioner #${params.practitionerId}...`);

  const response = await api.get<PractitionerQueryResponse>(`/pat-public/practitioner-hcd`, params)

  const { ok, data } = response;
  
  if (!ok || !data) {
    const error = response.data;
    throw error;
  }

  console.log(PREFIX, `Received response.`);
  return data;
};
