import { createContext } from "react";
import { SearchSuggestionsContextProps } from "./SearchSuggestionsScreen.types";

export const SearchSuggestionsContext = createContext<SearchSuggestionsContextProps>(
  {} as SearchSuggestionsContextProps
);