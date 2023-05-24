const calculator = require('./calculator');

test('adding', () => {
    expect(calculator.add(1, 2)).toEqual(3);
})

test('subtracting', () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
})

test('multiplying', () => {
    expect(calculator.multiply(2, 5)).toEqual(10);
})

test('dividing', () => {
    expect(calculator.divide(4, 2)).toEqual(2);
})