// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * I: numbers data
 * O: printing 1 - 100 with "Fizz" assigned to any multiples of 3, multiples of 5 print "FizzBuzz"
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //initializing output array to contain numbers
   let numbers = []
//creating for loop to loop through numbers
for(let i = 1; i <= 100; i++){
    //creating conditional if statement to pull multiples of three, then five, and finally 3 && 5
    if (i % 3 === 0){
        return console.log("Fizz")
    }if (i % 5 === 0){
        return console.log("Buzz")
    }if (i % 3 === 0 && i % 5 === 0){
        return console.log("FizzBuzz")
        numbers.push(i)
    }
}
    return numbers
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}