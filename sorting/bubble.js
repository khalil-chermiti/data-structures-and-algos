// swap function
function swap(arr, a, b) {
  var temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
// non sorted array
let arr = [12, 7, 44, 56, 14, 48, 42, 25, 1, 42, 36, 48, 75, 21, 14];

/*
 @ bubble sort
 * we stack the biggest element to the end of the array
 * if el[i] > el[i + 1] we swap ;
*/

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
}
bubbleSort(arr);

/* 
@ bubble optimisation
* if we don't swap for one loop against all element then the array is sorted 
* each iterations more elements at the top are sorted 
* we start looping from the top so that we don't compare against these sorted elements
*/

function optimisedBubbleSort(arr) {
  let noSwap;
  for (var i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      if (noSwap) break;
      // if there was no swap then array is sorted , we break out of the loop 
    }
  }
  return arr ;
}
console.log(optimisedBubbleSort(arr));
