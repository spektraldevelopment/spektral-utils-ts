import sanitizeString from "./sanitizeString";
/**
 * @function convertToCamel
 * @description Converts a string to camelCase.
 * Trims leading/trailing whitespace and replaces special characters with their uppercase equivalent.
 */
const convertToCamel = (str: string): string => {

    const cleanedString: string = sanitizeString(str, true);

    const regEx = new RegExp(`-.`, "g");

    return cleanedString.replace(regEx, (x) => x[1].toUpperCase());
};

export default convertToCamel;