import SpektralUtils from '..';

describe('SpektralUtils', () => {

    const utilsName = "SpektralUtils";

    it(`${utilsName}: should be defined`, () => {
        expect(SpektralUtils).toBeDefined();
    });

    it(`${utilsName}: should have a string module`, () => {
        expect(SpektralUtils.string).toBeDefined();
    });
});

