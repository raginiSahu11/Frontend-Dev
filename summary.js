// Q2 - Multi-Type Data Summary

let fullName = "Aarav";        // string
let age = 21;                  // number
let isStudent = true;          // boolean
let hobbies = ["Music", "Coding"]; // array
let profile = { city: "Delhi", course: "BCA" }; // object
let history = null;            // null
let pendingTask;               // undefined

// Display all values using console.table for formatted report
console.table({
    fullName: { value: fullName, type: typeof fullName },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    profile: { value: profile, type: typeof profile },
    history: { value: history, type: typeof history },
    pendingTask: { value: pendingTask, type: typeof pendingTask }
});
