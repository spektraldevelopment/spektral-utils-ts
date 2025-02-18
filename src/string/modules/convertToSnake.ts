import sanitizeString from "./sanitizeString";

/**
 * @function convertToSnake
 * @description Converts a string to snake_case.
 * Trims leading/trailing whitespace and replaces spaces with underscores.
 */
const convertToSnake = (str: string): string => {
    return sanitizeString(str, true).replace(/-/g, "_");
};

export default convertToSnake;