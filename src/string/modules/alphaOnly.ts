import { REG_EX_PATTERNS } from "../../common";
/**
 * @function alphaOnly
 * @description Removes all non-alphabetic characters from a string while leaving spaces, but trimming leading/trailing whitespace
 */
const alphaOnly = (str: string): string => {
    return str.trim().replace(REG_EX_PATTERNS.ALPHA_ONLY, "");
}

export default alphaOnly;