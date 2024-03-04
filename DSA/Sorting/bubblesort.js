const arr = [-4, 13, 0, 2, -9]

function bubbleSort(arr) {

  let lastCheckedIndex = arr.length;
  let swapped = true;

  do {
    swapped = false;
    for (let i = 1; i < lastCheckedIndex; i++) {
      if (arr[i - 1] > arr[i]) {
        let b = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = b;
        swapped = true
      }
    }
    lastCheckedIndex--;
  } while (swapped)
  return arr;
}

console.log(bubbleSort(arr));