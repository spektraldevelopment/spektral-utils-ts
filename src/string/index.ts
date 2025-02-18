import { REG_EX_PATTERNS } from "../common";

/**
 * @function sanitizeString
* @description Sanitizes a string by removing all special characters that are used as markup and converting it to lowercase
*/
export const sanitizeString = (str: string, hyphenate: boolean = false): string => {
    // * Trim out whitespace
    const trimmed: string = str.toLocaleLowerCase().trim();

    // * Strip out markup special characters and replace them with a space
    const stripped: string = trimmed.replace(REG_EX_PATTERNS.SPECIAL_CHARS, " ");

    // * If hyphenate is true, replace spaces with hyphens, otherwise replace with a space
    const hyphen: string = hyphenate ? "-" : " ";

    // Convert str to lower case, trim leading/trailing whitespace,
    return stripped.replace(REG_EX_PATTERNS.SPACES, hyphen).trim();
};

/**
 * @function convertToCamel
 * @description Converts a string to camelCase.
 * Trims leading/trailing whitespace and replaces special characters with their uppercase equivalent.
 */
export const convertToCamel = (str: string): string => {

    const cleanedString: string = sanitizeString(str, true);

    const regEx = new RegExp(`-.`, "g");

    return cleanedString.replace(regEx, (x) => x[1].toUpperCase());
};

/**
 * @function convertToKebab
 * @description Converts a string to kebab-case.
 * Trims leading/trailing whitespace and replaces spaces with hyphens.
 */
export const convertToKebab = (str: string): string => {
    return sanitizeString(str, true);
}

/**
 * @public
 * @function convertToSnake
 * @description Converts a string to snake_case.
 * Trims leading/trailing whitespace and replaces spaces with underscores.
 */
export const convertToSnake = (str: string): string => {
    return sanitizeString(str, true).replace(/-/g, "_");
};

/**
 * @function convertToPascal
 * @description Converts a string to PascaleCase by sanitizing
 */
export const convertToPascal = (str: string): string => {
    // Sanitize the string leaving spaces
    const cleanedString: string = sanitizeString(str);

    // Put each word in an array
    const words: string[] = cleanedString.split(" ");

    // return a string with the first letter of each word capitalized
    return words.map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
};

/**
 * @function slice
 * @description Slices a string from the start index to the end index and return the result
 */

interface SliceOptions {
    start: number;
    end?: number;
}

export const slice = (str: string, options: SliceOptions ): string => {
    // Default start to 1 and leave end as undefined
    const { start = 1, end } = options;

    // Trim the whitespace from the string
    const trimmed = str.trim();

    // If end is defined return the sliced string from start to end, otherwise return the sliced string from start to the end of the string
    return end ? trimmed.slice(start, end) : trimmed.slice(start);

};

/**
 * @function capitalized
 * @description Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
    return str.trim().charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @function alphaOnly
 * @description Removes all non-alphabetic characters from a string while leaving spaces, but trimming leading/trailing whitespace
 */
export const alphaOnly = (str: string): string => {
    return str.trim().replace(REG_EX_PATTERNS.ALPHA_ONLY, "");
}


// * Ensure this file is treated as a module
export default {};


