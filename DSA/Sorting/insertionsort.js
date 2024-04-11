const arr = [12, 31, 25, 8, 17, 23];

function insertionSort(arr) {

  let n = arr.length;


  for (let i = 1; i < n; i++) {
    let tmp = arr[i];
    let j = i - 1;

    while (j >= 0 && tmp <= arr[j]) {
      arr[j + 1] = arr[j]
      j = j - 1;
    }
    arr[j + 1] = tmp;
  }

  return arr;
}

const sortedArr = insertionSort(arr);

console.log('##', sortedArr)