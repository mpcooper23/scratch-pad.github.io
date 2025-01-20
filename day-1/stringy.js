// #!/usr/bin/env node

'use strict';

const { startsWith } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * 
 I: string data
 O: number of chars in string, or length
 * 
 * 
 */
function length(string) {
    // return string length
return string.length
}



/**
 * Given an input String, return a new String forced to lowercase.
 * 
 I: string data
 O: lowercase string 
 * 
 */
function toLowerCase(string) {
    //lowerCase prototype
return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 * 
 I: string
 O: uppercase string
 * 
 */
function toUpperCase(string) {
    // return toUpperCase string
return string.toUpperCase()
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * 
 I: string data
 O: dash-case string 
 * 
 * 
 */
function toDashCase(string) {
    //create splitStr variable to hold split string
    let splitStr = string.split(' ')
    // for loop to loop through string characters
    //for (let i = 0; i < splitStr.length; i++){
       // if (splitStr[i] === " "){
       //    return splitStr[i] = "-"
      //  }
    //}
    //return split string joined with any spaces replaced with dashes and then converted to lowercase
    //to account for case sensitivity
    return splitStr.join("-").toLowerCase()
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 
 I: string data, single character (string data)
 O: boolean value: true if string starts with char, false if not
 C: must be lowercased to account for case sensitivity 
 */
function beginsWith(string, char) {
// using bracket notation to see if first index is strictly equal to char input
//adding toLowerCase to account for case sensitivity
if(string[0].toLowerCase() === char.toLowerCase()){
    return true
    }else {
        return false
    }
}


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
   if(string[string.length - 1].toLowerCase() === char.toLowerCase()){
    return true;
   }else {
    return false;
   }
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * 
 * I: two strings
 * O: two strings concatenated 
 * C: use concat string prototype
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//return the strings concatenated
return stringOne.concat(stringTwo)
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * 
 * 
 * I: two strings
 * O: return longest of the two strings
 * C: for loop to count, if statement to compare lengths
 * 
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //nested for loop to count string lengths
    //and then to compare and return the longest of the two
for (let i = 0; i < stringOne.length; i++){
    for (let j = 0; j < stringTwo.length; j++){
        if (stringOne.length > stringTwo.length){
            return stringOne;
        }else {
            return stringTwo;
        }
    }
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}