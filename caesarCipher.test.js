const caesarCipher = require('./caesarCipher');

test('original text shifted', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})