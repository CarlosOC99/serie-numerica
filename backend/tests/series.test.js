const { calculateSerie } = require('../calc/series');

describe('Pruebas unitarias de la función calculateSerie', () => {

  const testCases = [
    { input: 1, expected: 0 },
    { input: 2, expected: 0 },
    { input: 3, expected: 1.7142857142857142 },
    { input: 4, expected:  3.857142857142857 },
    { input: 5, expected: 8.571428571428571 },
    { input: 6, expected: 12 },
    { input: 7, expected: 17.678571428571427 },
    { input: 8, expected: 18 },
    { input: 9, expected: 19.428571428571427 },
    { input: 10, expected: 17.243697478991596 },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`Debería calcular correctamente el valor de la serie para n = ${input}`, () => {
      const result = calculateSerie(input);
      expect(result).toBeCloseTo(expected, 2);
    });
  });
});
