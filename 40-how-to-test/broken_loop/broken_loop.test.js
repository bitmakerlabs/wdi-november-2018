const {filterInactiveAccounts} = require('./broken_loop');

test('filters inactive accounts', () => {
  const activeAccount = {email: 'bettymaker@bitmaker.co', active: true};
  const inactiveAccount = {email: 'pandathebear@bitmaker.co', active: false};
  const anotherInactiveAccount = {email: 'koalathebear@bitmaker.co', active: false};

  const accounts = [activeAccount, inactiveAccount, anotherInactiveAccount];

  const filtered = filterInactiveAccounts(accounts);

  expect(filtered).toEqual([activeAccount]);
});
