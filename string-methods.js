var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);               // number to hex(16), octal (8) or binary (2)

/* More Strings Methods */

var str = "Hello World";
var str1 = "United States of America";
var str2 = "states";

// Basics I

str.length // Return length of string str
str[n] // Return nth character of string str
str.charAt(index) // Return character in string str at specified index
str.toLowerCase() // Convert string str to lower case
str.toUpperCase() // Convert string str to upper case

// General I

str.indexOf(substr) // Return first index within string str of substring substr
str.split(separator) // Split string str into an array of substrings separated by param separator
str.trim() // Trim whitespace from beginning and end of string str
str1 < str2 // Return true if str1 is less than str2
str1 > str2 // return true if str1 is greater than str2

// Experimental I

str.codePointAt(index) // Return non-negative int from string str that is the UTF-16 encoded code point at given index
str1.includes(str2) // Return true if str2 is found in string str1
str1.endsWith(str2) // Return true if string str1 ends with string str2
str.normalize() // Return Unicode Normalization Form of string str
str.repeat(int) // Return string repeated int times of string str
str1.startsWith(str2) // Return true if string str1 starts with str2
str[@@iterator]() // Return a new Iterator that iterates over the code points of string str, returning each code point as String value

// General II

str.charCodeAt(index) // Return number indicating Unicode value of char at given index of string str
str1.concat(str2) // Combine text of strings str1 and str2 and return a new string
str.lastIndexOf(substr) // Return last index within string str of substring substr
str.slice(start, end) // Extract a section of string str from start to end
str.substr(start, length) // Return characters in string str from start having length length

// General III

str.substring(index1, index2) // Return subset of string str between index1 and index2
str.toLocaleLowerCase() //Convert chars in string str to lower case while respecting current locale
str.toLocaleUpperCase() // Convert chars in string str to upper case while respecting current locale
str.trimLeft() // Trim whitespace from left side of string st
str.trimRight() // Trim whitespace form right side of string str

// General IV

str1.localeCompare(str2) // Return -1, 0, or 1 indicating if string str1 is less than, equal to, or greater than str2
str.match(regexp) // Match a regular expression regexp against string str
str1.replace(regexp, str2) // Replace matched regexp elements in string str1 with string str2
str.search(regexp) // Return position of search for a match between regexp and string str