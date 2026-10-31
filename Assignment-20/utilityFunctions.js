

// 1. Merge two settings objects
function mergeSettings(defaultSettings, userSettings) {

    if (typeof defaultSettings !== "object" || defaultSettings === null) {
        return "Invalid default settings";
    }

    if (typeof userSettings !== "object" || userSettings === null) {
        return "Invalid user settings";
    }

    return {
        ...defaultSettings,
        ...userSettings
    };
}


// 2. Calculate total of numbers
function calculateTotal(numbers) {

    if (!Array.isArray(numbers)) {
        return "Input must be an array";
    }

    if (numbers.some(num => typeof num !== "number" || !Number.isFinite(num))) {
        return "Array must contain only valid numbers";
    }

    return numbers.reduce((total, num) => total + num, 0);
}


// Export functions
export {
    mergeSettings,
    calculateTotal
};