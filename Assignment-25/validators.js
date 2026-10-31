

// 1. Check required input
function isRequired(value) {
    if (value === null || value === undefined) {
        return false;
    }

    return String(value).trim() !== "";
}


// 2. Validate email address
function validateEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// 3. Validate mobile number (10 digits)
function validateMobile(mobile) {
    if (typeof mobile !== "string") {
        return false;
    }

    return /^[6-9]\d{9}$/.test(mobile);
}


// 4. Validate password length
function validatePassword(password) {
    if (typeof password !== "string") {
        return false;
    }

    return password.length >= 8;
}


// 5. Validate number within a range
function validateRange(number, min, max) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
        return false;
    }

    return number >= min && number <= max;
}


// Export all validation functions
export {
    isRequired,
    validateEmail,
    validateMobile,
    validatePassword,
    validateRange
};