/**
 * @function deleteCookie
 * @description This function is used to delete a cookie by setting it's expiration date to a date in the past
 */
const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export default deleteCookie;
