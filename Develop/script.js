let generateBtn = document.querySelector("#generate");

// Generate arrays.
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","[","}","]","|",":",";","'"];
let numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword () {
  let passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length should be at least 8 characters long and a max of 128 characters. Try Again")
    return;
  }

  let passwordUpperCase = confirm("Click ok to confirm including uppercase characters");
  let passwordLowerCase = confirm("Click ok to confirm including lowercase characters");
  let passwordSpecialCharac = confirm("Click ok to confirm including special characters");
  let passwordNumberCharac = confirm("Click ok to confirm including numerical characters");

  let random = [];
  if (passwordUpperCase) {
    random = random.concat(upperCase);
  }

  if (passwordLowerCase) {
    random = random.concat(lowerCase);
  }

  if (passwordSpecialCharac) {
    random = random.concat(specialCharacters);
  }

  if (passwordNumberCharac) {
    random = random.concat(numberCharacters);
  }
  console.log(random)

  let createPassword = [];

  for (let i =0; i < passwordLength; i++) {
    let index = Math.floor(Math.random()*random.length);
    createPassword.push(random[index]);
  }
  console.log(createPassword)

  let newPassword = createPassword.join("");
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


