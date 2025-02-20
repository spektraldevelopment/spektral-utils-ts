import onDocReady from "../modules/onDocReady";
import createElement from "../modules/createElement";
import getMaxZIndex from "../modules/getMaxZIndex";

describe("Dom Module", () => {
  describe("onDocReady", () => {
    // * Test if onDocReady is defined
    it(`is defined`, () => {
      expect(onDocReady).toBeDefined();
    });

    // * Test if onDocReady fires the callback when the document is ready
    it(`should fire the callback when the document is ready`, () => {
      // * Create a mock function
      const mockFunction = jest.fn();
      // * Fire the onDocReady function
      onDocReady(mockFunction);
      // * Expect the mock function to have been called
      expect(mockFunction).toHaveBeenCalled();
    });
  });

  describe("createElement", () => {
    // * Test if createElement is defined
    it(`is defined`, () => {
      expect(createElement).toBeDefined();
    });

    // * Create a new element
    const newElement = createElement("div", {
      classList: ["foo", "bar"],
      style: {
        color: "red",
        padding: "1rem",
      },
      textContent: "Hello, World!",
      innerHTML: "<p>Hello, World!</p>",
      dataset: {
        test: "test",
        foo: "bar",
      },
    });

    // * Test if createElement returns an HTMLElement
    it(`should return an HTMLElement`, () => {
      // * Expect the new element to be an instance of HTMLElement
      expect(newElement).toBeInstanceOf(HTMLElement);
    });

    // * Test if createElement adds classes to the new element
    it(`should add classes to the new element`, () => {
      console.log("newElement.classList: ", newElement.classList);
      // * Expect the new element to have the class "test"
      expect(newElement.classList.contains("foo")).toBeTruthy();
      expect(newElement.classList.contains("bar")).toBeTruthy();
    });

    // * Test if createElement adds styles to the new element
    it(`should add styles to the new element`, () => {
      // * Expect the new element to have the style "color: red"
      expect(newElement.style.color).toBe("red");
      expect(newElement.style.padding).toBe("1rem");
    });

    // * Test if createElement adds text content to the new element
    it(`should add text content to the new element`, () => {
      // * Expect the new element to have the text content "Hello, World!"
      expect(newElement.textContent).toBe("Hello, World!");
    });

    // * Test if createElement adds inner HTML to the new element
    it(`should add inner HTML to the new element`, () => {
      // * Expect the new element to have the inner HTML "<p>Hello, World!</p>"
      expect(newElement.innerHTML).toBe("<p>Hello, World!</p>");
    });

    // * Test if createElement adds data attributes to the new element
    it(`should add data attributes to the new element`, () => {
      // * Expect the new element to have the data attribute "test"
      expect(newElement.dataset.test).toBe("test");
      expect(newElement.dataset.foo).toBe("bar");
    });

    const basicElement = createElement("div");

    // * Test if createElement returns an HTMLElement
    it(`should return an HTMLElement`, () => {
      // * Expect the new element to be an instance of HTMLElement
      expect(basicElement).toBeInstanceOf(HTMLElement);
    });
  });

  describe("getMaxZIndex", () => {
    // * Test if getMaxZIndex is defined
    it(`is defined`, () => {
      expect(getMaxZIndex).toBeDefined();
    });

    // * Test if getMaxZIndex returns a number
    it(`should return a number`, () => {
      // * Expect getMaxZIndex to return a number
      expect(getMaxZIndex()).toBeGreaterThanOrEqual(0);
    });

    // * Test if getMaxZIndex returns a value of 5 when the z-index of the body is set to 5
    it(`should return a value of 5 when the z-index of the body is set to 5`, () => {
      // * Create a new element
      const newElement = createElement("div");

      // * Add newElement to body
      document.body.appendChild(newElement);

      // * Set the z-index of the body to 5
      newElement.style.zIndex = "5";

      // * Expect getMaxZIndex to return 5
      expect(getMaxZIndex()).toBe(5);
    });

    it(`should return a value of 10 when the z-index of the body is set to 10`, () => {
      // * Create a new element
      const newElement = createElement("div");

      // * Add newElement to body
      document.body.appendChild(newElement);

      // * Change the z-index of the new element to 100
      newElement.style.zIndex = "100";

      // * Expect getMaxZIndex to return 100
      expect(getMaxZIndex()).toBe(100);
    });

    // * Test if adding multiple div elements to the body returns the correct z-index
    it(`should return the proper z-index when multiple elements are added dynamically`, () => {
      // * Create a new element
      const newElement = createElement("div");

      // * Add newElement to body
      document.body.appendChild(newElement);

      // * Set the z-index of the new element to 10
      newElement.style.zIndex = "10";

      // * Create a new element
      const newElement2 = createElement("div");

      // * Add newElement2 to body
      document.body.appendChild(newElement2);

      // * Set the z-index of the new element to 100
      newElement2.style.zIndex = "100";

      // * Create a new element
      const newElement3 = createElement("div");

      // * Add newElement3 to body
      document.body.appendChild(newElement3);

      // * Set the z-index of the new element to 1000
      newElement3.style.zIndex = "1000";

      // * Expect getMaxZIndex to return 1000
      expect(getMaxZIndex()).toBe(1000);
    });
  });
});
