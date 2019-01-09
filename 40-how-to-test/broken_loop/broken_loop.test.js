const {filterInactiveAccounts} = require('./broken_loop');

test('filters inactive accounts', () => {
  const activeAccount = {email: 'bettymaker@bitmaker.co', active: true};
  const inactiveAccount = {email: 'pandathebear@bitmaker.co', active: false};
  const accounts = [activeAccount, inactiveAccount];
  const filtered = filterInactiveAccounts(accounts);
  expect(filtered).toEqual([activeAccount]);
});
