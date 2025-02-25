// Iterative approach of Power function:
const iterativePower = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
};

// Recursive approach of Power function
const recursivePower = (base, exponent) => {
    if (exponent == 0) {
        return 1;
    } else {
        return base * recursivePower(base, exponent - 1);
    }
};