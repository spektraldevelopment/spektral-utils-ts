/**
 * @function getCookie
 * @description This function is used to retrieve a cookie
 * @param {string} name - name of the cookie to retrieve
 * @returns {string|object|boolean} - returns the cookie if it exists, otherwise returns false
 */
type Cookie = string | object | boolean;

const getCookie = (name: string): Cookie => {
  // Declare cookie object
  let cookie: { [key: string]: string } = {};

  // Split the cookie string into an array and loop through it
    document.cookie.split(";").forEach((item) => {
        // Split the item into a key and value
        const [key, value] = item.split("=");
        // Assign the key and value to the cookie object
        cookie[key.trim()] = value;
    });

  // Cookie exists
  const cookieExists = cookie[name] ? true : false;

  const isStringifiedObject = cookie[name] && cookie[name].startsWith("{");



  // if cookie exists and value is not an object return it
  if (cookieExists && !isStringifiedObject) {
    // return cookie raw cookie value
    return cookie[name];
  } else if (cookieExists && isStringifiedObject) {
    // return parsed cookie value if it is an object
    return JSON.parse(cookie[name]);
  } else {
    // if cookie does not exist return false
    return false;
  }
};

export default getCookie;
