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


// Write a function named findSolution that, given a target number, determines a sequence 
// of operations that starts from the number 1 and, through a combination of additions and 
// multiplications, arrives at the target number.
const findSolution = target => {
    function find (current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ?? 
            find (current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
};