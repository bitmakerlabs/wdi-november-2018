//broken
function filterInactiveAccounts(accounts){
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].active == false){
      accounts.splice(i, 1);
    }
  }
  return accounts;
}

module.exports = {filterInactiveAccounts};