// Assignment code here
function generatePassword() {

  // Created arrays for every character type able to be used within the password parameters.

  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", ";", ":", "?", "/", "<", ">", ".", ",", "~"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // Variable that will be used to obtain the password length.

  var Length = getLength();

  // Empty array that will be used to store the arrays above and allow for characters to be selected at random.

  var emptyArray = [];

  // Allows users to confirm what characters they want in their password.

  var special = confirm("Would you like your password to contain any special characters?");
  var upper = confirm("Would you like your password to contain any uppercase letters?");
  var lower = confirm("Would you like your password to contain any lowercase letters?");
  var num = confirm("Would you like your password to contain any numbers?");

  // Function ensures the user creates a password between 8-128 characters. 
  //It also makes sure the user enters a number value and not a letter resetting it back to zero if it is a letter.

  function getLength() {
    var characterLength = 0;
    while ((characterLength < 8) || (characterLength > 128)) {
      characterLength = prompt("Password should be between 8 - 128 characters");

      if (isNaN(characterLength)) {
        characterLength = 0;
      }
    }
  
    return characterLength;
  }
  // Creating an array that will be used to generate the password by randomly selecting from it.

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
  // Loop that will generate a random password based upon the users choices.

  var passwordDisplay = "";
  for (var i = 0; i < Length; i++) {
    passwordDisplay = emptyArray[Math.floor(Math.random() * (emptyArray.length))];
  } 
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
