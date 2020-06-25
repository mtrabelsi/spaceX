import { ArrayListType } from "./types";

export const filterList = (q: string, key: string, list: ArrayListType): ArrayListType  => {
    function escapeRegExp(s: string) {
      return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    const words = q
      .split(/\s+/g)
      .map(s => s.trim())
      .filter(s => !!s);
    const hasTrailingSpace = q.endsWith(" ");
    const searchRegex = new RegExp(
      words
        .map((word, i) => {
          if (i + 1 === words.length && !hasTrailingSpace) {
            // The last word - ok with the word being "startswith"-like
            return `(?=.*\\b${escapeRegExp(word)})`;
          } else {
            // Not the last word - expect the whole word exactly
            return `(?=.*\\b${escapeRegExp(word)}\\b)`;
          }
        })
        .join("") + ".+",
      "gi"
    );
    return list.filter(item => searchRegex.test(item[key]));
  }