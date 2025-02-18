import sanitize from "../string";

describe("Common Module", () => {
    describe("String Module", () => {
        describe("sanitize", () => {
            it("should sanitize a string by removing all special characters that are used as markup and converting it to lowercase", () => {
                const str: string = "Hello, World!";
                const sanitized: string = sanitize(str);
                expect(sanitized).toBe("hello world");

                const sanitizedHyphenated: string = sanitize(str, true);
                expect(sanitizedHyphenated).toBe("hello-world");
            });
        });
    });
});