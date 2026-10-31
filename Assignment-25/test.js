

import {
    isRequired,
    validateEmail,
    validateMobile,
    validatePassword,
    validateRange
} from "./validators.js";

// 1. Required Input Tests
console.log("----- Required Input -----");
console.log(isRequired("Kartik")); // true
console.log(isRequired("   "));    // false
console.log(isRequired(null));     // false

// 2. Email Validation Tests
console.log("\n----- Email Validation -----");
console.log(validateEmail("test@gmail.com")); // true
console.log(validateEmail("invalid-email"));  // false

// 3. Mobile Number Tests
console.log("\n----- Mobile Validation -----");
console.log(validateMobile("9876543210")); // true
console.log(validateMobile("12345"));     // false

// 4. Password Validation Tests
console.log("\n----- Password Validation -----");
console.log(validatePassword("kartik123")); // true
console.log(validatePassword("abc"));       // false

// 5. Range Validation Tests
console.log("\n----- Range Validation -----");
console.log(validateRange(50, 1, 100));  // true
console.log(validateRange(150, 1, 100)); // false