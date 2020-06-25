// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//----------------------my solution--------------------------
function palindrome(str) {
    const reversed = str.split('').reverse().join('')
    return str === reversed//returns boolean true or false
}

//Alt solution #1
// does unnecessary extra checks so first solution would be more efficient
function palindrome(str) {
    return str.split('').every((char, i)=>{
        return char === str[str.length - i - 1]
    })
}



module.exports = palindrome;
