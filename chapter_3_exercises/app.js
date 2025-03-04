// Exercise 1:
// Write a function `min` that takes two arguments and returns their minimum.

const min = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(Math.min(a, b));
        return Math.min(a, b);
    } else if (Array.isArray(a) && Array.isArray(b)) {
        console.log(Math.min(...a), Math.min(...b));
        return [Math.min(...a), Math.min(...b)];
    } else {
        console.log('Invalid input: a and b must both be numbers or arrays.');
        return null;
    }
};