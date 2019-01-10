const {
  getRandomJunk,
  isCompostable,
  isRecyclable,
  isGarbage,
  compost,
  recycle,
  toss,
  sortJunk,
  getMaterial,
  emptyMaterial
} = require('./recycler');

beforeEach(() => {
  emptyMaterial();
})

test('getRandomJunk returns a string', () => {
  let junk = getRandomJunk();
  expect(typeof junk).toBe('string');
})

test('isCompostable returns true if item in food array', () => {
  // expect(isCompostable('Moldy Bread')).toEqual(true);
  expect(isCompostable('Moldy Bread')).toBeTruthy();
})

test('isCompostable returns false if item is not in food array', () => {
  expect(isCompostable('Soda Bottle')).toBeFalsy();
})

test('toss returns false when items undefined', () => {
  expect(toss()).toEqual(false);
})

test('toss returns true when items is an array', () => {
  expect(toss([])).toEqual(true);
})

test('toss updates garbage counter by length of items array', () => {
  toss(['Old Shoes', 'VHS Tape'])
  expect(getMaterial().garbage).toEqual(2)
})
