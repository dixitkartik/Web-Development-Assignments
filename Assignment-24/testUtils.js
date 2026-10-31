

// 1. Remove extra spaces from beginning and end
function trimText(text) {

    if (typeof text !== "string") {
        return "";
    }

    return text.trim();
}


// 2. Remove extra spaces between words
function normalizeSpaces(text) {

    if (typeof text !== "string") {
        return "";
    }

    return text.trim().replace(/\s+/g, " ");
}


// 3. Convert text to lowercase
function convertToLowercase(text) {

    if (typeof text !== "string") {
        return "";
    }

    return text.toLowerCase();
}


// 4. Remove unwanted control characters
function removeControlCharacters(text) {

    if (typeof text !== "string") {
        return "";
    }

    return text.replace(/[\u0000-\u001F\u007F]/g, "");
}


// 5. Clean complete form input
function cleanFormInput(text) {

    if (typeof text !== "string") {
        return "";
    }

    return removeControlCharacters(
        normalizeSpaces(text)
    );
}


// Export all functions
export {
    trimText,
    normalizeSpaces,
    convertToLowercase,
    removeControlCharacters,
    cleanFormInput
};