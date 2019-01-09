const {fahToCel, celToFah} = require('./temperature');

test('can convert positive temp from fahrenheit to celsius', () => {
  const fTemp = 50;
  const actualCTemp = fahToCel(fTemp);
  const expectedCTemp = 10;

  expect(actualCTemp).toEqual(expectedCTemp);
});

test('can convert negative temp from fah to cel', () => {
  const fTemp = -4;
  const expectedCTemp = -20;
  const result = fahToCel(fTemp);

  expect(result).toEqual(expectedCTemp);
});

test('can convert 0 fah to cel', () => {
  const fTemp = 0;
  const expectedCTemp = -17.7778;
  const result = fahToCel(fTemp);
  const diff = result - expectedCTemp;

  expect(diff).toBeLessThan(0.01);
})

test('can convert cel to fah positive temp', () => {
  const cTemp = 10;
  const fTemp = 50;
  const result = celToFah(cTemp);

  expect(result).toEqual(fTemp);
});






