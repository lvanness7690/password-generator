// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Helper function to get random character from a string
function getRandomCharacter(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

// Main password generation function
function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!@#$%^&*()-_+=<>?";

    var passwordLength = prompt("Enter the password length (between 8 and 128):");

    // Validate password length
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please provide a valid password length between 8 and 128.");
        passwordLength = prompt("Enter the password length (between 8 and 128):");
    }

    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialCharacters = confirm("Include special characters?");

    // Check that at least one character type is chosen
    while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
        alert("You must choose at least one character type.");
        includeLowercase = confirm("Include lowercase letters?");
        includeUppercase = confirm("Include uppercase letters?");
        includeNumbers = confirm("Include numbers?");
        includeSpecialCharacters = confirm("Include special characters?");
    }

    var password = "";
    var allowedCharacters = "";

    if (includeLowercase) allowedCharacters += lowercase;
    if (includeUppercase) allowedCharacters += uppercase;
    if (includeNumbers) allowedCharacters += numbers;
    if (includeSpecialCharacters) allowedCharacters += specialCharacters;

    for (var i = 0; i < passwordLength; i++) {
        password += getRandomCharacter(allowedCharacters);
    }

    return password;
}
