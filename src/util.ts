import { BLACKLIST_SINGULAR_WORDS } from "./constants";
import type { Token } from "./types";

export const splice = (
  str: string,
  index: number,
  count: number,
  add: string
) => {
  let i = index;
  if (i < 0) {
    i = str.length + i;
    if (i < 0) {
      i = 0;
    }
  }

  return str.slice(0, i) + (add || "") + str.slice(i + count);
};

/**
 * Determine whether the set of tokens is a singular blacklisted word.
 * The only blacklisted singular word currently is "a".
 */
export const checkBlacklist = (tokens: Token[]): boolean => {
  return (
    tokens.length === 1 &&
    BLACKLIST_SINGULAR_WORDS.includes(tokens[0].lowerCaseValue)
  );
};
