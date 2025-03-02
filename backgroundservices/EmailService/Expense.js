const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Expense = require("../models/Expense");
dotenv.config();

const expenseEmail = async () => {
    const expenses = await Expense.find();

    const totalExpense = expenses.reduce(
        (acc, expense) => acc + expense.value, 0
    )

    if (totalExpense > 30000) {
        let messageOption = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: "Warning",
            text: `Your total expenses is ${totalExpense}. please review expenses`,
        }

        await sendMail(messageOption);
    }
}

module.exports = {
    expenseEmail,
};