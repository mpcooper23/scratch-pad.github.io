// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */



/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

//I: string
//O: string length
//C:
//E:


function length(string) {
    // YOUR CODE BELOW HERE //
    //returns string length using .length 
return string.length
   
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

//I: string
//O: new string forced to lowercase 
//C:
//E:

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   //returns the data type of a string forced to lowercase letters
return string.toLowerCase()
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

//I: String data type
//O: String forced to uppercase
//C:
//E:

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//returning string to uppercase
return string.toUpperCase()

    // YOUR CODE ABOVE HERE //
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
 */

//I: String
//O: Return string forced to dash-case
//C:
//E:

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    return string.split(' ').join('-').toLowerCase()
  //creating for loop to iterate through string 
  
 //for(let i = 0; i < string.length; i++){
  //looping and creating nested if statement to locate space and replace with dash
  //if (string[i] === ' ') {
  //returning string to lowercase
 //return string.toLowerCase().concat('-')
  //}
 //}
    // YOUR CODE ABOVE HERE //
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
 */

//I: string data type and characters in string
//O: boolean
//C: use beginsWith()
//E:

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//forcing string to lowercase
string.toLowerCase()
// initializing if statement to check if the first character of the string
    if(string === string.startsWith(char)){
        return true;
    }else{
        return false;
    }

    // YOUR CODE ABOVE HERE //
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

//I:
//O:
//C:
//E:

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//accounting for to lower case
string.toLowerCase()
// initializing if statement to check if the last character of the string matches inputted char
if(string.length - 1 === string.endsWith(char)){
    return true;
}else{
    return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

//I: two strings
//O: two strings concatenated
//C: use .concat()
//E:

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
let newString = stringOne.concat(stringTwo)

return newString
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

//I:
//O:
//C:
//E:

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //initializing a variable 
   let newString = stringOne.join(stringTwo).push(args)
    
return newString

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
 */

//I: two strings
//O: longest of the two strings
//C:
//E:

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//creating conditional if statement to compare two strings and return the longest of the two
if (stringOne.length > stringTwo.length){
    return stringOne
}else {return stringTwo}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I:
//O:
//C:
//E:

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I:
//O:
//C:
//E:

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