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
    const symbols = '!@#$%^&*(){}[]=<>/,.+-_';  
  return symbols[Math.floor(Math.random * symbols.length)];
}