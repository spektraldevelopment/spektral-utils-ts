import setCookie from "../modules/setCookie";
import getCookie from "../modules/getCookie";
import deleteCookie from "../modules/deleteCookie";

describe("Cookie Module", () => {
  describe("setCookie", () => {
    // * Test if setCookie is defined
    it(`is defined`, () => {
      expect(setCookie).toBeDefined();
    });

    // * Test if setCookie sets a cookie
    it(`should set a cookie`, () => {
      // * Expect the cookie to be set
      expect(setCookie("test", "test")).toBeUndefined();
      expect(getCookie("test")).toBe("test");
    });

    // * Test is setCookie sets a cookie with an object value
    it(`should set a cookie with an object value`, () => {
      // * Expect the cookie to be set
      expect(setCookie("test", { foo: "bar" })).toBeUndefined();
      expect(getCookie("test")).toEqual({ foo: "bar" });
    });
  });

  describe("getCookie", () => {
    // * Test if getCookie is defined
    it(`is defined`, () => {
      expect(getCookie).toBeDefined();
    });

    // * Test if getCookie retrieves a cookie
    it(`should retrieve a cookie`, () => {
      // * Set the cookie
      setCookie("test", "test");
      // * Expect the cookie to be retrieved
      expect(getCookie("test")).toBe("test");
    });

    // * Test if getCookie retrieves a cookie with an object value
    it(`should retrieve a cookie with an object value`, () => {
      // * Set the cookie
      setCookie("test", { foo: "bar" });
      // * Expect the cookie to be retrieved
      expect(getCookie("test")).toEqual({ foo: "bar" });
    });

    // * Test if getCookie returns false if the cookie does not exist
    it(`should return false if the cookie does not exist`, () => {
      // * Expect the cookie to not exist
      expect(getCookie("no-cookie")).toBe(false);
    });
  });

  describe("deleteCookie", () => {
    // * Test if deleteCookie is defined
    it(`is defined`, () => {
      expect(deleteCookie).toBeDefined();
    });

    // * Test if deleteCookie deletes a cookie
    it(`should delete a cookie`, () => {
      // * Set the cookie
      setCookie("test", "test");
      // * Expect the cookie to be deleted
      expect(deleteCookie("test")).toBeUndefined();
      expect(getCookie("test")).toBe(false);
    });
  });
});
