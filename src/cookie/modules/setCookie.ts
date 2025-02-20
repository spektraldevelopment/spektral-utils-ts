/**
 * @function setCookie
 * @description This function is used to set a cookie
 * @param {string} name - name of the cookie to set
 * @param {string} value - value of the cookie to set
 * @param {number} days - number of days the cookie should be valid for
 */
const setCookie = (
  name: string,
  value: string | {},
  days: number = 30,
): void => {
  // Declare expires variable
  let expires;

  // If days is set, set the expires variable
  if (days) {
    // Create a new date object
    let date = new Date();

    // Set the date to the current date + the number of days
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // Assign the date to the expires variable
    expires = `expires=${date.toUTCString()};`;
  } else {
    // Otherwise set the expires variable to an empty string
    expires = "";
  }

  // If the value is an object, stringify it
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }

  // Create the cookie string
  const cookie = `${name}=${value};${expires}; path=/`;

  //Set the cookie
  document.cookie = cookie;
};

export default setCookie;
