

// Shopping list array
let shoppingList = [];

// 1. Add item to shopping list
function addItem(item) {
    if (typeof item !== "string" || item.trim() === "") {
        console.log("Invalid item name!");
        return;
    }

    shoppingList.push(item.trim());
    console.log(item.trim() + " added successfully!");
}

// 2. Display all shopping items
function showList() {
    console.log("\n===== SHOPPING LIST =====");

    if (shoppingList.length === 0) {
        console.log("Your shopping list is empty.");
        return;
    }

    shoppingList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// 3. Remove an item
function removeItem(item) {
    const index = shoppingList.findIndex(
        product => product.toLowerCase() === item.toLowerCase()
    );

    if (index === -1) {
        console.log("Item not found!");
        return;
    }

    shoppingList.splice(index, 1);
    console.log(item + " removed successfully!");
}

// 4. Clear the entire shopping list
function clearList() {
    shoppingList = [];
    console.log("Shopping list cleared!");
}


// Interactive Shopping List Manager

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function startShoppingManager() {

    let running = true;

    while (running) {

        console.log("\n===== SHOPPING LIST MANAGER =====");
        console.log("1. Add Item");
        console.log("2. Show Shopping List");
        console.log("3. Remove Item");
        console.log("4. Clear Shopping List");
        console.log("5. Exit");

        const choice = await rl.question("\nEnter your choice: ");

        switch (choice) {

            case "1": {
                const item = await rl.question("Enter item name: ");
                addItem(item);
                break;
            }

            case "2":
                showList();
                break;

            case "3": {
                const item = await rl.question("Enter item to remove: ");
                removeItem(item);
                break;
            }

            case "4":
                clearList();
                break;

            case "5":
                console.log("Thank you for using Shopping List Manager!");
                running = false;
                break;

            default:
                console.log("Invalid choice! Please try again.");
        }
    }

    rl.close();
}

startShoppingManager();