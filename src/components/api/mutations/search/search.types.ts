export interface SearchQueryParams {
  text: string;
}

interface HighlightResult {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

export interface SearchQueryHit {
  name: string;
  code: string;
  shortName: string;
  keywords: string[];
  target: string;
  objectType: string;
  externalId: string | null;
  weight: number;
  objectID: string;
  _highlightResult: {
    name: HighlightResult;
    shortName: HighlightResult;
    keywords?: HighlightResult[];
  };
}

export interface SearchQueryResponse {
  hits: SearchQueryHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  index: string;
  processingTimeMS: number;
}
