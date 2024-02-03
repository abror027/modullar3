const moment = require('moment')

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMyBalance() {
        console.log(`Sizning hisobingizdagi mablag' ${this.#amount}$`);
        return this.#amount;
    }

    checkMyAccount_id() {
        console.log(`Sizning account id ingiz ${this.#account_id}`);
        return this.#account_id;
    }

    withdrawCash(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Sizning hisobingizda ${amount}$ yechildi. Qodiq ${this.#amount}$!`);
        } else {
            console.log(`Hisobingizda yetarli balance mavjud emas: ${this.#amount}$`);
        }
    }

    makeDeposite(amount) {
        this.#amount += amount;
        console.log(`Hisobingizga ${amount}$ summa qoshildi. Hozirda sizning balansingiz ${this.#amount}$`);
    }

    giveMeDetails(){
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
        console.log('Hisob raqamingiz:', this.#account_id);
    }

    static telMeAboutClass() {
        console.log('Bu class accountlarni yasash uchun xizmat qiladi');
    }
    static telMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYYY.MM.DD HH:mm:ss")}`);
    }
}

module.exports = Account;