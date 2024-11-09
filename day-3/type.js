// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 * I: data value
 * O: boolean 
 * C: use an if statement? use array.isarray()
 * E:
 */
function isArray(value) {

    // YOUR CODE BELOW HERE //
if(Array.isArray(value)) return true

//if (typeof value === Array.isArray([])) {
 //   return true;

    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 * 
 * I: value
 * O: true if value is object
 * C: if statement to determine object literal and not null, array, or date
 * E:
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) 
        return false;
   if (value === null)
        return false;
   if (value instanceof Date)
        return false;
    if (typeof value === 'object'){
        return true;
    }

    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 * 
 * I: value
 * O: true if value is array or object intended as collection; false otherwise
 * C:
 * E:
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)) {
        return true;
    }if (value === null){
        return false;
    }if (value instanceof Date){
        return false;
    }if (typeof value === 'object'){
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 * 
 * 
 * I: value
 * O: value of 9 data types returned in string
 * C:
 * E:
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return 'array';
    }if (value === null){
        return 'null';
    }if (value instanceof Date){
        return 'date';
    }if (typeof value === isObject){
        return 'object';
    }if (typeof value === string){
        return 'string'
    }if (typeof value === number){
        return 'number'
    }if (typeof value === boolean){
        return 'boolean'
    } if (){
        return 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}