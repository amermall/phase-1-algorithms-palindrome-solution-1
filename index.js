// Write a function isPalindrome that will receive one argument, a string. 
// Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.

// I. MY OWN WORDS:
// a. The input will be a string of a word.
// b. Look at the word and the letters in the word.
// c. If the letters read the same forwards and backwards, return true
// d. If the letters of the word do NOT read same forwards and backwards, return false

// My own words, part 2:
// a. make a function that returns true if a word is a palindrone and false if not.
// b. -> if the word is the same as the word in reverse, I should return true.

// II. WRITE YOUR OWN TEST CASES:
// a. So, take the letters in "MOM" => mom === mom, will return "true".
// b. abc === cba <= reversing here will be false

// III. Writing some Pseudocode:

function reverse(word) {
  // 'abc' => 'cba'
  // There is no reverse method for strings in JavaScript but there is a reverse method for arrays....
  // => ["a", "b", "c"].reverse()
  // Also, then if I wanted to make an array a string, I can call .join() on that array and it will make it a string...
  /*    strArray;
        [ 'a', 'b', 'c' ]
        strArray.reverse();
        [ 'c', 'b', 'a' ]
        strArray.join('');
        'cba'
 */
  // Also, we can use .split(), to break about strings or sentences into arrays.
  // e.g. "abc".split("") => ["a", "b", "c"];
  // OKAY, I KNOW HOW TO START THIS ....LET'S GET STARED...
  
  // 1. let's make the "word" input into an array
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  // (how do I reverse the input string?)
  // (first imagining that there is a method to reverse the string; even if there is not. But this will give me something to finish the rest of the logic...)
  const reverseWord = reverse(word)

  // if the input is the same as the reversed input
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
  //   return true
  // else
  //   return false
}

/* 
  Add your pseudocode here: if the word is the same as the word in reverse, I should return true...
  a. reverse the string that has been inputted, 

  b. If the input is the same as the reversed input, 
  --> then return true
  ->else
  --> return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
