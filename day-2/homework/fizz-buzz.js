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
  
  for(let num = 1; num <= 100; num++){
      //conditions 1, 2, 3
      if (num % 3 === 0 && num % 5 === 0){
          console.log("FizzBuzz")
      }else if (num % 3 === 0){
          console.log("Fizz")
      }else if (num % 5 === 0){
        console.log("Buzz");
      }else {
        console.log(num)
      }
  }
  }
  
  console.log(fizzBuzz(100))



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}