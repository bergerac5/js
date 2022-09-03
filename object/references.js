

let myAccount = {
    name: 'Bergerac',
    income: 0,
    expense: 0,
    balance:0
    
}

let addIncome = function(account, income)  {
    account.income = account.income + income
}
let addExpense = function (account, expense) {
    account.expense = account.expense + expense
}
let resetAccount = function(account) {
    account.income = 0
    account.expense = 0
}
let getSummary = function (account) {
    let balance = account.income - account.expense
    return `Account for ${account.name} has $${balance}. $${account.income} and $${account.expense}`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(getSummary(myAccount))