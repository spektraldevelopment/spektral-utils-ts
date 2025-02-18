import sanitizeString from "./sanitizeString";
/**
 * @function convertToKebab
 * @description Converts a string to kebab-case.
 * Trims leading/trailing whitespace and replaces spaces with hyphens.
 */
const convertToKebab = (str: string): string => {
    return sanitizeString(str, true);
}

export default convertToKebab;