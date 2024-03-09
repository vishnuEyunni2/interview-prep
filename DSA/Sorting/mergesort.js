const arr = [43, 12, 29, 20, -2, 0, 21];

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++;
    } else {
      result.push(right[rightIndex])
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const b = mergeSort(arr);

console.log('sorted arr: ', b)

