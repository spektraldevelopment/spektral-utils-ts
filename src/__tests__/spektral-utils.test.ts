import SpektralUtils from "..";

describe("SpektralUtils", () => {
  const utilsName = "SpektralUtils";

  it(`${utilsName}: should be defined`, () => {
    expect(SpektralUtils).toBeDefined();
  });

  describe("string", () => {
    it(`${utilsName}: should have a string module that contains the expected utility functions`, () => {
      expect(SpektralUtils.string).toBeDefined();

      const {
        sanitizeString,
        convertToCamel,
        convertToKebab,
        convertToSnake,
        convertToPascal,
        slice,
        capitalize,
        alphaOnly,
      } = SpektralUtils.string;

      expect(sanitizeString).toBeDefined();
      expect(convertToCamel).toBeDefined();
      expect(convertToKebab).toBeDefined();
      expect(convertToSnake).toBeDefined();
      expect(convertToPascal).toBeDefined();
      expect(slice).toBeDefined();
      expect(capitalize).toBeDefined();
      expect(alphaOnly).toBeDefined();
    });
  });

  describe("url", () => {
    it(`${utilsName}: should have a url module that contains the expected utility functions`, () => {
      expect(SpektralUtils.url).toBeDefined();
    });

    const { getURL, isURLValid } = SpektralUtils.url;

    expect(getURL).toBeDefined();
    expect(isURLValid).toBeDefined();
  });

  describe("cookie", () => {
    it(`${utilsName}: should have a cookie module that contains the expected utility functions`, () => {
      expect(SpektralUtils.cookie).toBeDefined();
    });

    const { getCookie, setCookie, deleteCookie } = SpektralUtils.cookie;

    expect(getCookie).toBeDefined();
    expect(setCookie).toBeDefined();
    expect(deleteCookie).toBeDefined();
  });

  describe("dom", () => {
    it(`${utilsName}: should have a dom module that contains the expected utility functions`, () => {
      expect(SpektralUtils.dom).toBeDefined();
    });

    const { onDocReady } = SpektralUtils.dom;

    expect(onDocReady).toBeDefined();
  });

  describe("object", () => {
    it(`${utilsName}: should have an object module that contains the expected utility functions`, () => {
      expect(SpektralUtils.object).toBeDefined();
    });

    const { watch } = SpektralUtils.object;

    expect(watch).toBeDefined();
  });

  describe("form", () => {
    it(`${utilsName}: should have a form module that contains the expected utility functions`, () => {
      expect(SpektralUtils.form).toBeDefined();
    });

    const { sanitizeInput } = SpektralUtils.form;

    expect(sanitizeInput).toBeDefined();
  });
});
