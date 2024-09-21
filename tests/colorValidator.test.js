const { isValidHex } = require('../app/server'); // Adjust the import based on your setup

describe('Color Validation', () => {
    test('valid hex color #FFFFFF should return true', () => {
        expect(isValidHex('#FFFFFF')).toBe(true);
    });

    test('valid hex color #FF5733 should return true', () => {
        expect(isValidHex('#FF5733')).toBe(true);
    });

    test('invalid hex color #FFFF23123123121F should return false', () => {
        expect(isValidHex('#FFFF23123123121F')).toBe(false);
    });

    test('invalid hex color 123456 should return false', () => {
        expect(isValidHex('123456')).toBe(false);
    });
});
