// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  // YOUR CODE HERE
  var lowercase= "abcdefghijklmnopqrstuvwxyz";
  
  var result= prompt ('what is your name?');
  
  var random= Math.floor(Math.random() * lowercase.length);

  console.log('RANDOM', random);

  return"";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);