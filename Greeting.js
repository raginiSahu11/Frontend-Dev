// Q1 - Personalized Login Greeting

let userName = "Ragini";  // sample name input
let hour = new Date().getHours();  // fetch current hour using Date object

// Time-based greeting using conditions and template literals
if (hour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (hour >= 12 && hour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
