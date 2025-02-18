/**
 * @function capitalized
 * @description Capitalizes the first letter of a string
 */
const capitalize = (str: string): string => {
    return str.trim().charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;