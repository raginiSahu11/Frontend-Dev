// Q8 - Salary Projection for 5 Years

let salary = 30000;
let incrementRate = 10; // in %

let records = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * (incrementRate / 100); // yearly increment
    records.push({ Year: year, Salary: Math.round(salary) });
}

console.table(records);
