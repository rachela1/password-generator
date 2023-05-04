var choiceArr = [];
var characterLength = 8;

var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '[', ']', '<', '>', '?', '/'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE HERE
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomChar = Math.floor(Math.random() * choiceArr.length) 
    password = password + choiceArr[randomChar];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("how many characters would you like? (8-128)"))

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("password has to be a number between 8 - 128.");
    return false;
  }

  if (confirm("Would you like to have numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like to have lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to have uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like to have special characters?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
var correctPrompts = getPrompts();
var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var randomPass = generatePassword();  
    passwordText.value = randomPass;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);