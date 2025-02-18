import SpektralUtils from '..';

describe('SpektralUtils', () => {

    const utilsName = "SpektralUtils";

    it(`${utilsName}: should be defined`, () => {
        expect(SpektralUtils).toBeDefined();
    });

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
            alphaOnly
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

