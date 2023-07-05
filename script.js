// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {

  // Created arrays for every character type able to be used within the password perimeters.

  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", ";", ":", "?", "/", "<", ">", ".", ",", "~"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var passwordLength = getLength();

  // empty array

  var emptyArray = [];

  // Allows users to confirm what characters they want in their password.

  var special = confirm("Would you like your password to contain any special characters?");
  var upper = confirm("Would you like your password to contain any uppercase letters?");
  var lower = confirm("Would you like your password to contain any lowercase letters?");
  var num = confirm("Would you like your password to contain any numbers?");
}
  // Applying all the character arrays into the empty array that was created.

if (special) {
  emptyArray = emptyArray.concat(specialCharacters);
}

if (upper) {
  emptyArray = emptyArray.concat(upperCaseLetters);
}

if (lower) {
  emptyArray = emptyArray.concat(lowerCaseLetters);
}

if (num) {
  emptyArray = emptyArray.concat(number);
}




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
