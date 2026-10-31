

import {
    isNonEmptyString,
    isValidEmail,
    isValidAge,
    isPositiveNumber
} from "./validationUtils.js";

console.log("===== VALIDATION TESTING =====");

// 1. Non-Empty String Testing
console.log("\n1. String Validation");

console.log(isNonEmptyString("Kartik")); // true
console.log(isNonEmptyString(""));       // false
console.log(isNonEmptyString("   "));    // false


// 2. Email Validation
console.log("\n2. Email Validation");

console.log(isValidEmail("test@gmail.com")); // true
console.log(isValidEmail("invalid-email"));  // false


// 3. Age Validation
console.log("\n3. Age Validation");

console.log(isValidAge(20));  // true
console.log(isValidAge(-5));  // false
console.log(isValidAge(150)); // false


// 4. Positive Number Testing
console.log("\n4. Positive Number Validation");

console.log(isPositiveNumber(50));  // true
console.log(isPositiveNumber(-10)); // false
console.log(isPositiveNumber(0));   // false

console.log("\n===== TESTING COMPLETED =====");