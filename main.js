//DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//Generate even listen
generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    /*
    1- Init pw var
    2- Filter out unchecked types
    3- Loop ever length call generator function for each type
    4- Add final pw to the pw var and return
    */
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// GEnerator functions - https://www.net-comber.com/charset.html

function getRandomLower() {
  /* 26 is the amount of letter in the english and french alphabet
    - spanish have 27 - italian 21 and german 26 but includes ä, ö and ß */
  // 97 is the code for the start of the lower case letter in the charset(between 97 and 122)
  return String.fromCharCode(Math.floor(Math.random * 26) + 97);
}

function getRandomUpper() {
  // 65 is the code for the start of the upper case letter in the charset(between 65 and 90)
  return String.fromCharCode(Math.floor(Math.random * 26) + 65);
}

function getRandomNumber() {
  //10 is the amount of numbers
  // 48 is the code for the start of the numbers in the charset(between 48 and 57)
  return String.fromCharCode(Math.floor(Math.random * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.+-_";
  return symbols[Math.floor(Math.random * symbols.length)];
}
