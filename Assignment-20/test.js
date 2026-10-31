

import {
    mergeSettings,
    calculateTotal
} from "./utilityFunctions.js";

console.log("===== UTILITY FUNCTION TESTING =====");

// 1. Testing mergeSettings()
console.log("\n1. Settings Merge");

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: false
};

const userSettings = {
    theme: "dark",
    notifications: true
};

const finalSettings = mergeSettings(defaultSettings, userSettings);

console.log("Default Settings:", defaultSettings);
console.log("User Settings:", userSettings);
console.log("Merged Settings:", finalSettings);


// 2. Testing calculateTotal()
console.log("\n2. Calculate Total");

const numbers = [10, 20, 30, 40];

const total = calculateTotal(numbers);

console.log("Numbers:", numbers);
console.log("Total:", total);


// 3. Testing Invalid Inputs
console.log("\n3. Invalid Input Testing");

console.log(mergeSettings(null, userSettings));
console.log(calculateTotal("Hello"));
console.log(calculateTotal([10, "20", 30]));

console.log("\n===== TESTING COMPLETED =====");