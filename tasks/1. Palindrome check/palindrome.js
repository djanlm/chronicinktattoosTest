export function isPalindrome(inputString) {

  var array = inputString.split("");
  var reverseArray = array.reverse();
  var reverseString = reverseArray.join("");

  if (inputString === reverseString) return true;

  return false;
}