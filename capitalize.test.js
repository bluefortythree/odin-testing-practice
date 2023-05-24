const capitalize = require('./capitalize');

test('first letter capitalized', () => {
    expect(capitalize('string')).toBe('String')
})