export interface WordsToNumbersOptions {
  fuzzy?: boolean;
  impliedHundreds?: boolean;
}

export const enum TokenType {
  UNIT = 0,
  TEN = 1,
  MAGNITUDE = 2,
  DECIMAL = 3,
  HUNDRED = 4,
}

export interface Token {
  start: number;
  end: number;
  value: string;
  lowerCaseValue: string;
  type: TokenType | undefined;
}

export interface SubRegion {
  tokens: Token[];
  type: TokenType | undefined;
}

export interface Region extends SubRegion {
  start: number;
  end: number;
  hasDecimal: boolean;
  subRegions: SubRegion[];
}
