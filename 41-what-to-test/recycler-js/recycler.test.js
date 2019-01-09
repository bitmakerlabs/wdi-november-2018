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
