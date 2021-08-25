export function getFizzBuzzUntil(n) {
  var i = 1;
  const array = [];

  while (i <= n) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("FizzBuzz")
    } else if (i % 3 == 0) {
      array.push("Fizz")
    } else if (i % 5 == 0) {
      array.push("Buzz")
    } else {
      array.push(i);
    }

    i++;
  }

  return array;
}
