import getURL from "../modules/getURL";
import isValidURL from "../modules/isURLValid";

describe("URL Module", () => {
  describe("getURL", () => {
    it("should be defined", () => {
      expect(getURL).toBeDefined();
    });

    it("should return an object with the following properties", () => {
      const url = getURL();

      expect(url).toHaveProperty("hash");
      expect(url).toHaveProperty("hashParams");
      expect(url).toHaveProperty("host");
      expect(url).toHaveProperty("hostname");
      expect(url).toHaveProperty("href");
      expect(url).toHaveProperty("origin");
      expect(url).toHaveProperty("pathname");
      expect(url).toHaveProperty("port");
      expect(url).toHaveProperty("protocol");
      expect(url).toHaveProperty("search");
      expect(url).toHaveProperty("searchParams");
    });

    it("should have values for each property that match the window.location object", () => {
      const url = getURL();

      expect(url.hash).toBe("#test=hello");
      expect(url.host).toBe("developer.mozilla.org:8080");
      expect(url.hostname).toBe("developer.mozilla.org");
      expect(url.href).toBe(
        "https://developer.mozilla.org/en/foobar?foo=bar&bar=foo#test=hello",
      );
      expect(url.origin).toBe("https://developer.mozilla.org");
      expect(url.pathname).toBe("/en/foobar");
      expect(url.port).toBe("8080");
      expect(url.protocol).toBe("https:");
      expect(url.search).toBe("?foo=bar&bar=foo");
      expect(url.searchParams).toEqual({ foo: "bar", bar: "foo" });
    });
  });

  describe("isValidURL", () => {
    it("should be defined", () => {
      expect(isValidURL).toBeDefined();
    });

    it("should return a boolean", () => {
      expect(typeof isValidURL("https://developer.mozilla.org")).toBe(
        "boolean",
      );
    });

    it("should return true for a valid URL", () => {
      expect(isValidURL("https://developer.mozilla.org")).toBe(true);
    });

    it("should return false for an invalid URL", () => {
      expect(isValidURL("https://developer.mozilla")).toBe(false);
    });

    it("should return false for a malformed URL", () => {
      expect(isValidURL("/developer.mozilla.org")).toBe(false);
    });
  });
});
