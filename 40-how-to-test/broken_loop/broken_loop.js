//broken
function filterInactiveAccounts(accounts){
  return accounts.filter((account) => {
    return account.active;
  })
}

module.exports = {filterInactiveAccounts};