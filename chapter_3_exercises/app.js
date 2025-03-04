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

// let isEven = num => {
//     if( num == 0) {
//         return true;
//     } else if (num == 1) {
//         return false;
//     } else if (num < 0){
//         return isEven(-num)
//     } else {
//         return isEven(num - 2);
//     }
// };


// Exercise 3:
// Write a function called countBs that takes a string as its only argument and returns a number that indicates 
// how many uppercase B characters there are in the string.

let countBs = str => {
    let b_count = 0;
    if(typeof str != 'string') {
        return "Please enter a string";
    } else {
        for (let count = 0; count <= str.length; count ++) {
            if (str[count] == 'B') {
                b_count ++;
            }
        }
        return b_count;
    }
};

// Next, write a function called countChar that behaves
//  like countBs, except it takes a second argument that
//  indicates the character that is to be counted (rather
//  than counting only uppercase B characters). Rewrite
//  countBs to make use of this new function.
function countChar(str, letter) {
    let str_count = 0;
    if (typeof str != 'string') {
        return "Please enter a string";
    } else {
        str = str.toLowerCase();
        for (let count = 0; count <= str.length; count++) {
            if(str[count] == letter) {
                str_count ++;
            }
        }
        return str_count;
    }

}