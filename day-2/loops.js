// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

//I: array
//O: console.log array values
//C:
//E:

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //creating a for loop to iterate forward through array
  for(let i = 0; i < array.length; i++){
  //logging array loop's iterations 
  console.log(array[i])}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

//I: array
//O: log values of array backwards
//C:loop backwards
//E:

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //creating for loop to loop backwards over array: start at end of array; 
  for (let i = array.length - 1; i > 0; i--){
  //logging loops
console.log(array[i])
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

//I: object
//O: return object keys using a for-in loop
//C: for-in loop
//E:
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //creating an array to hold pushed object keys
  var objKeys = [];
 for(var key in object){
    //returning pushed keys into objKeys array
   objKeys.push(object.key)
   return objKeys
    
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

//I: Object
//O: object keys
//C: for-in loop
//E:

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
   //creating an array to hold pushed object keys
   var objKeys = [];
   for(var key in object){
      //returning pushed keys into objKeys array
     objKeys.push(object.key)
     return objKeys
      
    }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

//I: Object
//O: array of object values
//C:
//E:

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //initializing array to hold object values
  let objVals = [];
  //pushing object values to array
objVals.push(object['key'])
//printing object values array
  console.log(objVals)
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

//I: 
//O: 
//C:
//E:

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

//I: 
//O: 
//C:
//E:

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  let length = object['key'];
  console.log(length)
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

//I: object
//O: print object values in reverse
//C: reverse for-in loop
//E:

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){
    console.log(object.key)
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}