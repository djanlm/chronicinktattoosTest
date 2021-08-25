export function Reduce(array, reducer, initialValue) {
  // reducer = (acc, currItem) => {
  //   return acc + currItem;
  // };

  var accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i])
  }

  return accumulator;
}
