let product = " wireless headphones PRO ";

// Step-by-step formatting
let cleaned = product.trim().toLowerCase();

// Capitalizing each word
cleaned = cleaned.split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");

// Replace "Pro" with "Pro Edition"
cleaned = cleaned.replace("Pro", "Pro Edition");

console.log("Clean Title:", cleaned);
console.log("Length:", cleaned.length);
