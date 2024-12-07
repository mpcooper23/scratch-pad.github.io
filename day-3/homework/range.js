// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * I: two num data parameters
 * O: returns array with intergers contained between inputs
 *    use output array (and slice?) to create the inputted arguments
 *    (i.e. start and end)
 * C:
 * E:
 * 
 */
function range(start, end) {
    //output array
    let output = [];
    //FIRST: set up conditionals
       //creating if statement to check if the "end" 
         //value is greater than the "start"
    //SECOND: if statement to check if "end" < "start"
if(start <= end){
    for(let i = start; i <= end; i++){//set loop at "start"; iterate up to "end"
    output.push(i)}
}else if (start >= end){
    for(let i = start; i >= end; i--)//set loop at "start" again; only this time,
    output.push(i)                      //decrement to access elements in reverse
}                                    //push "i", which represents each interger value
    return output                      // NOT "start[i]" which would access the value for
}                                        //an array or string. Since start is number data,
                                           // using "i" correctly isolates the integer value


//console.log(range(2, 10)) ==> 





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}