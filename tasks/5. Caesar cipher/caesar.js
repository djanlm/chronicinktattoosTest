export function encryptCaesar(inputString, key) {

  if (key < 0) {
    return encryptCaesar(inputString, key + 26);
  }

  var output = "";

  for (var i = 0; i < inputString.length; i++) {

    var character = inputString[i];


    if (character.match(/[a-z]/i)) {
      // Get its code
      var code = inputString.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        character = String.fromCharCode(((code - 65 + key) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        character = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }

    output += character;
  }

  return output;
}
