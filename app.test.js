const { add, subtract } = require('./app');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 3 from 10 to equal 7', () => {
    expect(subtract(10, 3)).toBe(7);
});