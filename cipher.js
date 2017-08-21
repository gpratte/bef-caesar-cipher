
const letters = 'abcdefghijklmnopqrstuvwxyz';

function encipher(str, shift) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let startIndex = letters.indexOf(str[i]);

    if (startIndex + shift > letters.length - 1) {
      let remaining = letters.length - 1 - startIndex;
      output += letters[shift - remaining - 1];
    }
    else {
      output += letters[startIndex + shift];
    }
  }

  return output;
}

function decipher(str, shift) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let startIndex = letters.indexOf(str[i]);

    if (startIndex - shift < 0) {
      let remaining = startIndex - shift;
      output += letters[letters.length + remaining];
    }
    else {
      output += letters[startIndex - shift];
    }
  }

  return output;
}

module.exports = {
  encipher,
  decipher
}
