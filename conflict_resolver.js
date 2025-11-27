// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;   // Using global bonus value
    }

    console.log(`Total Salary: ₹${salary}`);
}

// Testing with both conditions
calculateSalary(true);   // Bonus applied
calculateSalary(false);  // Bonus not applied
