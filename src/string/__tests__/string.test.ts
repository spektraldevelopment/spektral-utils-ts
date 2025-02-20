// * Initial test for the string module

import sanitizeString from "../modules/sanitizeString";
import convertToCamel from "../modules/convertToCamel";
import convertToKebab from "../modules/convertToKebab";
import convertToSnake from "../modules/convertToSnake";
import convertToPascal from "../modules/convertToPascal";
import slice from "../modules/slice";
import capitalize from "../modules/capitalize";
import alphaOnly from "../modules/alphaOnly";

describe("String Module", () => {
  describe("sanitizeString", () => {
    // * Test if sanitizeString is defined
    it(`is defined`, () => {
      expect(sanitizeString).toBeDefined();
      expect(typeof sanitizeString("test")).toBe("string");
    });

    // * Test if sanitizeString removes special characters and returns a lowercase string
    it(`removes special characters and returns a lowercase string`, () => {
      // * Expect the string to be sanitized and a lowercase string is returned
      expect(sanitizeString("Test!@#$%^&*()Case!@#$%^&")).toBe("test case");
    });

    //  * Test if sanitizeString replaces spaces with hyphens
    it(`should replace spaces with hyphens`, () => {
      // * Expect the string to be sanitized and a lowercase string is returned
      expect(sanitizeString("Test Case", true)).toBe("test-case");
    });

    // * Test if sanitizeString replaces spaces with spaces
    it(`should replace spaces with spaces`, () => {
      // * Expect the string to be sanitized and a lowercase string is returned
      expect(sanitizeString("Test      Case      ")).toBe("test case");
    });

    // * Test that sanitzeString throws and error is str attribute is not type of string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => sanitizeString(123 as any)).toThrow();
    });
  });

  describe("convertToCamel", () => {
    // * Test if convertToCamel is defined
    it(`is defined`, () => {
      expect(convertToCamel).toBeDefined();
    });

    // * Test if convertToCamel converts a string to camel case
    it(`should convert a string to camel case`, () => {
      // * Expect the string to be converted to camel case
      expect(convertToCamel("test case")).toBe("testCase");
      expect(convertToCamel("Foo Bar")).toBe("fooBar");
      expect(convertToCamel("example& one")).toBe("exampleOne");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => convertToCamel(123 as any)).toThrow();
    });
  });

  describe("convertToKebab", () => {
    // * Test if convertToKebab is defined
    it(`is defined`, () => {
      expect(convertToKebab).toBeDefined();
    });

    // * Test if convertToKebab converts a string to kebab case
    it(`should convert a string to kebab case`, () => {
      // * Expect the string to be converted to kebab case
      expect(convertToKebab("test case")).toBe("test-case");
      expect(convertToKebab("Foo Bar")).toBe("foo-bar");
      expect(convertToKebab("example& one")).toBe("example-one");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => convertToKebab(123 as any)).toThrow();
    });
  });

  describe("convertToSnake", () => {
    // * Test if convertToSnake is defined
    it(`is defined`, () => {
      expect(convertToSnake).toBeDefined();
    });

    // * Test if convertToSnake converts a string to snake case
    it(`should convert a string to snake case`, () => {
      // * Expect the string to be converted to snake case
      expect(convertToSnake("test case")).toBe("test_case");
      expect(convertToSnake("Foo Bar")).toBe("foo_bar");
      expect(convertToSnake("example%%% one")).toBe("example_one");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => convertToSnake(123 as any)).toThrow();
    });
  });

  describe("convertToPascal", () => {
    // * Test if convertToPascal is defined
    it(`is defined`, () => {
      expect(convertToPascal).toBeDefined();
    });

    // * Test if convertToPascal converts a string to Pascal case
    it(`should convert a string to Pascal case`, () => {
      // * Expect the string to be converted to Pascal case
      expect(convertToPascal("test case")).toBe("TestCase");
      expect(convertToPascal("foo Bar foo")).toBe("FooBarFoo");
      expect(convertToPascal("example @ one")).toBe("ExampleOne");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => convertToPascal(123 as any)).toThrow();
    });
  });

  describe("slice", () => {
    // * Test if slice is defined
    it(`is defined`, () => {
      expect(slice).toBeDefined();
    });

    // * Test if slice slices a string from the start index to the end index
    it(`should slice a string from the start index to the end index`, () => {
      // * Expect the string to be sliced from the start index to the end index
      expect(slice("test case", { start: 0, end: 4 })).toBe("test");
      expect(slice("Foo Bar", { start: 0, end: 3 })).toBe("Foo");
      expect(slice("example one", { start: 0, end: 7 })).toBe("example");
    });

    // * Test if only start is passed to slice
    it(`should slice a string from the start index to the end of the string`, () => {
      // * Expect the string to be sliced from the start index to the end of the string
      expect(slice("test case", { start: 0 })).toBe("test case");
      expect(slice("Foo Bar", { start: 0 })).toBe("Foo Bar");
      expect(slice("example one", { start: 0 })).toBe("example one");
    });
  });

  describe("capitalize", () => {
    // * Test if capitalize is defined
    it(`is defined`, () => {
      expect(capitalize).toBeDefined();
    });

    // * Test if capitalize capitalizes the first letter of a string
    it(`should capitalize the first letter of a string`, () => {
      // * Expect the first letter of the string to be capitalized
      expect(capitalize("test case")).toBe("Test case");
      expect(capitalize("lorem ipsum")).toBe("Lorem ipsum");
      expect(capitalize("example one")).toBe("Example one");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => capitalize(123 as any)).toThrow();
    });
  });

  describe("alphaOnly", () => {
    // * Test if alphaOnly is defined
    it(`is defined`, () => {
      expect(alphaOnly).toBeDefined();
    });

    // * Test if alphaOnly removes non-alphabetic characters from a string
    it(`should remove non-alphabetic characters from a string`, () => {
      // * Expect the string to be sanitized and a lowercase string is returned
      expect(alphaOnly("Test!@#$%^&*()Case!@#$%^&")).toBe("TestCase");
      expect(alphaOnly("Test   12   Case     3 ")).toBe("TestCase");
      expect(alphaOnly("F1o2o3b4a5r")).toBe("Foobar");
    });

    // * Throws an error if str is not a string
    it(`should throw an error if str is not a string`, () => {
      // * Expect an error to be thrown
      expect(() => alphaOnly(123 as any)).toThrow();
    });
  });
});
