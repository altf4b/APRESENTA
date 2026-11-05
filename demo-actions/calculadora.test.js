const soma = require('./calculadora');

test('Deve somar 2 + 2 e retornar 4', () => {
  expect(soma(2, 2)).toBe(4);
});