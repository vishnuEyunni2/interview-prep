const arr = [10, -2, 0, 12, 9];

console.log('orig: ', arr);

function selectionsort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp
    }
    console.log('after #', i, '- ', arr);
  }

}

const b = selectionsort(arr)