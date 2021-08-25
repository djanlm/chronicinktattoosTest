export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  var flag = 0;
  var stringArray = inputString.split("");

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '(') flag++;
    if (stringArray[i] === ')') flag--;

    if (flag < 0) return false;
  }

  if (flag !== 0) return false;
  if (flag === 0) return true;
}