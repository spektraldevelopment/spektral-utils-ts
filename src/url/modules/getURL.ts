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
 * @description Returns an enhanced object with the properties of the window.location object
 * @returns {URLObject} An interface with the properties of the window.location object
 * */
const getURL = (): URLObject => {
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = window.location;

    const paramsToObject = (entries: IterableIterator<[string, string]>) => {
        const obj: any = {};
        for (const [key, value] of entries) {
            obj[key] = value;
        }
        return obj;
    };

    return {
        hash,
        hashParams: hash.substring(1).split("#"),
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search,
        searchParams: paramsToObject(new URLSearchParams(search).entries()),
      };
};

export default getURL;