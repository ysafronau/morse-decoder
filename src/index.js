const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  const letterArr = expr.match(/.{1,10}/g);
  letterArr.forEach((el) => {
    let space = "**********";
    if (el === space) {
      result += " ";
    } else {
      const morseArr = el.match(/.{0,2}/g);
      let morseLetterKey = "";
      morseArr.forEach((el) => {
        if (el === "10") morseLetterKey += ".";
        if (el === "11") morseLetterKey += "-";
      });
      result += MORSE_TABLE[morseLetterKey];
    }
  });
  return result;
}

module.exports = {
  decode,
};
