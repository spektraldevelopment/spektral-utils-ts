import { REG_EX_PATTERNS } from "../../common";
/**
 * @function sanitizeInput
 * @description  This function will sanitize the value of an input field to remove any html or unwanted special characters
 */
const sanitizeInput = (input: string): string => {
  // * If input value is not empty return the sanitized value
  if (input.length === 0) {
    return "";
  } else {
    return input
      .replace(REG_EX_PATTERNS.HTML, "")
      .replace(REG_EX_PATTERNS.SPECIAL_CHARS, "");
  }
};

export default sanitizeInput;
