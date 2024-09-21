const assert = require('assert');

function isValidHex(hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
}

describe('Hex Color Validator', () => {
    it('should return true for valid 6-digit hex code', () => {
        assert.strictEqual(isValidHex('#FFFFFF'), true);
    });

    it('should return true for valid 3-digit hex code', () => {
        assert.strictEqual(isValidHex('#FFF'), true);
    });

    it('should return false for invalid hex code', () => {
        assert.strictEqual(isValidHex('123456'), false);
    });

    it('should return false for hex codes with non-hex characters', () => {
        assert.strictEqual(isValidHex('#GGGGGG'), false);
    });
});

module.exports = isValidHex;
