// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * I: input "base" could be string or number
 * O: returning function that tests condition of value being greater than the base.
 * C: 
 * E:
 * 
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
return function(num){
    return num > base
}
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 * I: 'base' which could be string or number
 * O: function that tests whether a given value is less than the input 'base'
 * C:
 * E:
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(num){
        return num < base
    }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 * 
 * I: single character
 * O: function that tests whether given string starts with character
 * C: needs to be case insensitive, use startsWith() string method
 * E:
 * 
 * 
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    //returning function that tests whether string value starts with char
    return function startsWith(string, char) {
        // YOUR CODE BELOW HERE //
    //using conditional if statement to check if first 
    //character on input string is strictly equal to the inputted char;
    //used toLowerCase() to account for case insensitivity 
        if (string[0].toLowerCase().startsWith(char.toLowerCase())){
            return true;
        }else {
            return false;
        }
        // YOUR CODE ABOVE HERE //
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 * 
 * I: endsWith char
 * O: function that tests whether input string ends with input char
 * C:
 * E:
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function endsWith(string, char) {
        // YOUR CODE BELOW HERE //
    //using conditional if statement to check if first 
    //character on input string is strictly equal to the inputted char;
    //used toLowerCase() to account for case insensitivity 
        if (string[string.length - 1].toLowerCase() === char.toLowerCase()){
            return true;
        }else {
            return false;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}