import { formFixture } from "../../../test/fixtures";

import sanitizeInput from "../modules/sanitizeInput";
import focusInput from "../modules/focusInput";

describe("Form Module", () => {
  describe("sanitizeInput", () => {
    it("should have a form module that contains the expected utility functions", () => {
      expect(sanitizeInput).toBeDefined();
    });

    it("should sanitize the input value", () => {
      const input = "<p>$#&Test!&*</p>";
      const expected = "Test";
      const result = sanitizeInput(input);

      expect(result).toBe(expected);
    });

    it("should return an empty string if input is empty", () => {
      const input = "";
      const expected = "";
      const result = sanitizeInput(input);

      expect(result).toBe(expected);
    });

    it("should strip html from complex strings", () => {
      const input = "<p>$#&Test!&*<a href='/foo/bar'>123</a></p>";
      const expected = "Test123";

      const result = sanitizeInput(input);
      expect(result).toBe(expected);
    });
  });

  describe("focusInput", () => {
    // * Set the document body to the form fixture
    document.body.innerHTML = formFixture;

    it("should be defined", () => {
      expect(focusInput).toBeDefined();
    });

    const exampleInput = document.querySelector(
      "#example-input",
    ) as HTMLInputElement;

    it("should focus the input", () => {
      focusInput(exampleInput);

      expect(exampleInput.classList.contains("utils-input__ios--focus")).toBe(
        true,
      );
    });

    it("should focus the input with a custom class", () => {
      focusInput(exampleInput, "custom-class");

      expect(exampleInput.classList.contains("custom-class")).toBe(true);
    });
  });
});
