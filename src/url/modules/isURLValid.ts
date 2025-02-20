/**
 * @function isURLValid
 * @description Checks if a URL is valid and not malformed.
 */
const isURLValid = (url: string): boolean => {
  const domainAndUrlRegEx =
    /^(((http|https):\/\/|)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)$/;
  return domainAndUrlRegEx.test(url);
};

export default isURLValid;
