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

// Exercise 2:

// Define a recursive function isEven corresponding to this description (
//      Zero is even.
//      One is odd.
//      For any other number N, its evenness is the same as N - 2.
// )
// The function should accept a single parameter (a positive, whole number) and return a Boolean.

let isEven = num => {
    if( num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0){
        return isEven(-num)
    } else {
        return isEven(num - 2);
    }
};