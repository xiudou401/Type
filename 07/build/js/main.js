// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        const value = transactions[transaction];
        if (typeof value === 'number') {
            total += value;
        }
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
export {};
//# sourceMappingURL=main.js.map