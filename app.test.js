const { add, subtract, multiply } = require('./app');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 3 from 10 to equal 7', () => {
    expect(subtract(10, 3)).toBe(7);
});

test('multiplies 4 by 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
});