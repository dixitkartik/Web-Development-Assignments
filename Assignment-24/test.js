

import {
    trimText,
    normalizeSpaces,
    convertToLowercase,
    removeControlCharacters,
    cleanFormInput
} from "./textUtils.js";


// 1. Trim Text
console.log("===== TRIM TEXT =====");

console.log(trimText("   Kartik Dixit   "));
// Expected: Kartik Dixit


// 2. Normalize Spaces
console.log("\n===== NORMALIZE SPACES =====");

console.log(normalizeSpaces("Hello     JavaScript    World"));
// Expected: Hello JavaScript World


// 3. Convert to Lowercase
console.log("\n===== LOWERCASE =====");

console.log(convertToLowercase("HELLO JAVASCRIPT"));
// Expected: hello javascript


// 4. Remove Control Characters
console.log("\n===== REMOVE CONTROL CHARACTERS =====");

console.log(removeControlCharacters("Hello\nWorld\tJavaScript"));
// Expected: HelloWorldJavaScript


// 5. Clean Complete Form Input
console.log("\n===== CLEAN FORM INPUT =====");

console.log(cleanFormInput("   Kartik     Dixit   "));
// Expected: Kartik Dixit


// 6. Invalid Input Testing
console.log("\n===== INVALID INPUT TESTING =====");

console.log(trimText(123));
// Expected: empty string

console.log(cleanFormInput(null));
// Expected: empty string


console.log("\n===== TESTING COMPLETED =====");