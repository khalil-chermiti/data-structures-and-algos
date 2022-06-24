/*
* merge sort O(nlog(n))
* we keep deviding the array into two until we reach small arrays of 0 or 1 element (recursive mergeSort function)
* then we rebuild the array by merging these arrays into each other (merge function)
*/

function merge(arr1, arr2) {

  let i = 0;
  let j = 0;
  let result = [];

  // if we hit the end of one array then break 
  while (i < arr1.length && j < arr2.length) {

    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // if we still have elements in the first array we push them to the result array  
  while(i < arr1[i]){
    result.push(arr1[i]) ;
    i++ ;
  }
  // if we still have elements in the second array we push them to the result array
  while(j < arr2[j]){
    result.push(arr2[j]) ;
    j++ ;
  }

  // we return the result 
  return result ;
}


// recursive mergeSort function 

function mergeSort(arr) {

  // if we reach arr.length of 1 or 0 we return that array 
  if (arr.length <= 1) return arr ; 
  
  // we get the middle of the array 
  let middle = Math.floor(arr.length / 2) ;

  // we get the left part of the array (recursive!! : left will be devided to right and left and so on )
  let left = mergeSort(arr.slice(0 , middle)) ;

  // we get the right part of the array (recursive!! : right will be devided to right and left and so on )
  let right = mergeSort(arr.slice(middle)) ;

  return merge(left , right) ;
}

console.log(mergeSort([10,24,76,73])) ;
