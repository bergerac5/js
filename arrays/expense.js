
const account = {
    name: 'Bergerac',
    income:[],
    expenses: [],
    addExpense: function(descpription, amount) {
        this.expenses.push({
            descpription: descpription,
            amount: amount
        })
    },
    addIncome: function(descpription,amount) {
        this.income.push({
            descpription: descpription,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        let totalExpenses = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses = expense.amount
        })
    
        let balance = totalIncome - totalExpenses
        return `${this.name} has balance of $${balance}, $${totalIncome}, $${totalExpenses}`
    }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())
