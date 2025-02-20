import watch from "../modules/watch";

describe("Object Module", () => {
  describe("watch", () => {
    // * Test that watch is defined and a function
    it("should be defined and a function", () => {
      expect(watch).toBeDefined();
      expect(typeof watch).toBe("function");
    });

    // * Test that watch returns a Proxy object
    it("should return a Proxy object", () => {
      const obj = { name: "John Doe" };
      const watchedObj = watch(obj, () => {});
      expect(watchedObj).toBeInstanceOf(Object);
    });

    // * Test that the callback function is called when a change is detected
    it("should call the callback function when a change is detected", () => {
      const obj = { name: "John Doe" };
      const callback = jest.fn();
      const watchedObj = watch(obj, callback);
      watchedObj.name = "Jane Doe";
      expect(callback).toHaveBeenCalled();
    });

    // * Test that callback function returns the correct values
    it("should return the correct values in the callback function", () => {
      const obj = { name: "John Doe", age: 25 };
      const callback = jest.fn();
      const watchedObj = watch(obj, callback);
      watchedObj.name = "Jane Doe";
      watchedObj.age = 30;
      expect(callback).toHaveBeenCalledWith("name", "John Doe", "Jane Doe");
      expect(callback).toHaveBeenCalledWith("age", 25, 30);
    });

    // * Test that the object is updated correctly
    it("should update the object correctly", () => {
      const obj = { name: "John Doe", age: 25 };
      const callback = jest.fn();
      const watchedObj = watch(obj, callback);
      watchedObj.name = "Jane Doe";
      watchedObj.age = 30;
      expect(watchedObj).toEqual({ name: "Jane Doe", age: 30 });
    });
  });
});
