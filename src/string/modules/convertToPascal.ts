import sanitizeString from "./sanitizeString";
/**
 * @function convertToPascal
 * @description Converts a string to PascaleCase by sanitizing
 */
const convertToPascal = (str: string): string => {
  // Sanitize the string leaving spaces
  const cleanedString: string = sanitizeString(str);

  // Put each word in an array
  const words: string[] = cleanedString.split(" ");

  // return a string with the first letter of each word capitalized
  return words
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

export default convertToPascal;
