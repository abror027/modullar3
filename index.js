// Module package FILE

/* //hisob.js dan kelyapti
const calculate = require('./hisob.js');

const natija = calculate.kopaytirish(80,20);
console.log("Natija: ", natija)
console.log("***************")
const natija1 = calculate.bolish(80,20);
console.log("Natija: ", natija1)
console.log("***************")
const natija2 = calculate.qoshish(80,20);
console.log("Natija: ", natija2)
console.log("***************")
const natija3 = calculate.ayirish(80,20);
console.log("Natija: ", natija3)

console.log(require('module').wrapper) */

//accoun.js dan kelyapti
const Account = require('./account');
Account.telMeAboutClass();
Account.telMeTime();

const myAccount = new Account('Gary', 700000000, 8954657464845);
myAccount.giveMeDetails();

myAccount.makeDeposite(2870000);

myAccount.withdrawCash(9783600);

myAccount.makeDeposite(200000);