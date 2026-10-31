

import products from "./products.js";

import {
    filterByCategory,
    filterByPrice,
    summarizeProducts
} from "./productUtils.js";


// 1. Display Complete Dataset
console.log("===== ALL PRODUCTS =====");
console.table(products);


// 2. Filter by Category
console.log("\n===== ELECTRONICS PRODUCTS =====");

const electronics = filterByCategory(products, "Electronics");

console.table(electronics);


// 3. Filter by Maximum Price
console.log("\n===== PRODUCTS UNDER 10000 =====");

const affordableProducts = filterByPrice(products, 10000);

console.table(affordableProducts);


// 4. Product Summary
console.log("\n===== PRODUCT SUMMARY =====");

const summary = summarizeProducts(products);

console.log("Total Products:", summary.totalProducts);
console.log("Total Stock:", summary.totalStock);
console.log("Average Price:", summary.averagePrice);


// 5. Summary of Filtered Products
console.log("\n===== ELECTRONICS SUMMARY =====");

console.log(summarizeProducts(electronics));

console.log("\n===== TESTING COMPLETED =====");