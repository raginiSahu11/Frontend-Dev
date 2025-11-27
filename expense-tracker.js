// Q3 - Monthly Expense Tracker

let expenses = [4000, 1500, 8000, 1200, 2000]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, val) => sum + val); // sum of all expenses
let average = total / expenses.length;

let finalAmount = total * 1.10; // adding 10% tax

console.log("Total Expenses:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("After 10% Tax:", finalAmount.toFixed(2));
