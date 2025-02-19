interface URLObject {
    hash: string;
    hashParams: string[];
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    searchParams: {};
}

/**
 * @function getURL
 * @description Returns an enhanced object with the selected properties of the window.location object
 * @returns {URLObject} An interface with the properties of the window.location object
 * */
const getURL = (): URLObject => {
    const { hash, search, ...defaults } = window.location;

    const paramsToObject = (entries: IterableIterator<[string, string]>) => {
        return Object.fromEntries(entries);
    };

    return {
        ...defaults,
        hash,
        hashParams: hash.substring(1).split("#"),
        search,
        searchParams: paramsToObject(new URLSearchParams(search).entries()),
      };
};

export default getURL;