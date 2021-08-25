export function getFibonacciUntil(n) {

  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const array = getFibonacciUntil(n - 1);

  return [...array, array[n - 2] + array[n - 3]];

}
