// GEnerator functions - https://www.net-comber.com/charset.html

function getRandomLower() {
    /* 26 is the amount of letter in the english and french alphabet
    - spanish have 27 - italian 21 and german 26 but includes ä, ö and ß */
    // 97 is the code for the start of the lower cases in the charset(between 97 and 122)
  return String.fromCharCode(Math.floor(Math.random * 26) + 97);
}