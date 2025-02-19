/**
 * Exercise 1: Looping a triangle
 * This function prints a triangle pattern of increasing '#' characters.
 * It uses a for-loop to generate the pattern, starting with one '#' and adding one more in each iteration, until the string length is 7.
 */
const loopTriangle = () => {
    let content = document.getElementById("content");
    let output = '';

    for (let hashStr = '#'; hashStr.length <= 7; hashStr += '#') {
        output += hashStr + '<br>';
    }
    content.innerHTML = output;
}

/**
 * Exercise 2: FizzBuzz
 * This function prints numbers from 0 to 100. For multiples of 3, it prints "Fizz". 
 * For multiples of 5, it prints "Buzz". For multiples of both 3 and 5, it prints "FizzBuzz".
 */
const fizzBuzz = () => {
    let content = document.getElementById("content");
    let output = '';

    for (let number = 0; number <= 100; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            output += "FizzBuzz<br>";
        } else if (number % 5 == 0 && number % 3 != 0) {
            output += "Buzz<br>";
        } else if (number % 3 == 0 && !number % 5 == 0) {
            output += 'Fizz<br>';
        } else {
            output += number + '<br>';
        }
    }
    content.innerHTML = output;
}

/**
 * Exercise 3: Chessboard
 * This function generates a chessboard pattern of given size.
 * The size of the board is provided by the user. It alternates between ' ' and '#' to create the pattern.
 * 
 * @function createChessBoard
 */
function createChessBoard() {
    let size = Number(prompt("Enter a board size!"));
    let content = document.getElementById("content");
    let board = '';

    for (let row = 0; row < size; row++) {
        let rowStr = "";
        for (let col = 0; col < size; col++) {
          // Determine whether to add " " or "#"
          if ((row + col) % 2 === 0) {
            rowStr += " ";
          } else {
            rowStr += "#";
          }
        }
        // Add the completed row to the board
        board += rowStr + "<br>";
    }
    // Output the final board
    content.innerHTML = board;
};