
// Q4 - Academic Performance Evaluator

let marks = [78, 69, 90, 85, 80]; // sample 5 subject marks

let totalMarks = marks.reduce((a, b) => a + b);
let percentage = (totalMarks / 500) * 100;

// Condition: if any subject < 35 → Detained
if (marks.some(m => m < 35)) {
    console.log("Detained – One or more subjects below passing mark.");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50) {
    console.log("Promoted");
}
else {
    console.log("Detained");
}

console.log(`Percentage: ${percentage.toFixed(2)}%`);

