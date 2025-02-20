import { REG_EX_PATTERNS } from "../../common";

/**
 * @function sanitize
 * @description Sanitizes a string by removing all special characters that are used as markup and converting it to lowercase
 */
const sanitize = (str: string, hyphenate: boolean = false): string => {
  // * Trim out whitespace
  const trimmed: string = str.toLocaleLowerCase().trim();

  // * Strip out markup special characters and replace them with a space
  const stripped: string = trimmed.replace(REG_EX_PATTERNS.SPECIAL_CHARS, " ");

  // * If hyphenate is true, replace spaces with hyphens, otherwise replace with a space
  const hyphen: string = hyphenate ? "-" : " ";

  // Convert str to lower case, trim leading/trailing whitespace, trim leading/trailing hyphens
  return stripped
    .replace(REG_EX_PATTERNS.SPACES, hyphen)
    .replace(/^-+|-+$/g, "")
    .trim();
};

export default sanitize;
