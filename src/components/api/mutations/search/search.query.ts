import { suggestionApi } from "../../api";
import { SearchQueryParams, SearchQueryResponse } from "./search.types";

const PREFIX = '[searchQuery]';

export const SEARCH_QUERY_KEY = 'SEARCH'

export const searchQuery = async ({ text }: SearchQueryParams) => {
  console.log(PREFIX, `Trying to search: ${text}...`);
  const response = await suggestionApi.get<SearchQueryResponse[]>(`_search`, {
    q: text,
    type: ['speciality', 'expertise', 'practitioner', 'center']
  });

  const { ok, data } = response;

  if (!ok || !data) {
    const error = response.data;
    console.log(PREFIX, 'An error occurred.', error);
    throw error;
  }

  console.log(PREFIX, `Received update response.`);
  return data;
}