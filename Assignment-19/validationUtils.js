

// 1. Check whether a string is empty
function isNonEmptyString(value) {
    if (typeof value !== "string") {
        return false;
    }

    if (value.trim() === "") {
        return false;
    }

    return true;
}

// 2. Validate email
function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    if (email.trim() === "") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 3. Validate age
function isValidAge(age) {
    if (typeof age !== "number") {
        return false;
    }

    if (!Number.isInteger(age)) {
        return false;
    }

    if (age < 1 || age > 120) {
        return false;
    }

    return true;
}

// 4. Validate positive number
function isPositiveNumber(number) {
    if (typeof number !== "number") {
        return false;
    }

    if (!Number.isFinite(number)) {
        return false;
    }

    return number > 0;
}

// Export all validation functions
export {
    isNonEmptyString,
    isValidEmail,
    isValidAge,
    isPositiveNumber
};