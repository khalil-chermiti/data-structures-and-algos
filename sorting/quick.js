// swap function
function swap(arr, a, b) {
  var temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// the pivot function
function pivot(arr, start = 0, end = arr.length) {

  let pivotEl = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end ; i++) {
    if (pivotEl > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

// recursive quick sort 

function quickSort(arr, left = 0, right = arr.length - 1) {

  if (left < right) {

    let pivotIndex = pivot(arr , left , right);

    quickSort(arr, left, pivotIndex -1 );

    quickSort(arr, pivotIndex + 1, right);

  }

  return arr;
}

console.log(quickSort([2,5,3,7,4,6])) ;