/*
* we compare each element of the array against all the other elements 
* if we find a minimum value we swap ;
*/

// O(n²) ;

// swap function 
function swap (arr , a , b) {
  var temp ; 
  temp = arr[a] ;
  arr[a] = arr[b] ; 
  arr[b] = temp ;
}


// non sorted array 
let arr = [12,7,44,56,14,48,42,25,1,42,36,48,75,21,14] ;

function selection(arr) {
  
  for(let i = 0 ; i < arr.length ; i++ ) {
    // suppose i is the minimum
    let min = i ;
    // we start from i + 1 cuz previous values are sorted 
    for(let j = i + 1  ; j < arr.length ; j++){
      if (arr[j] < arr[min]) min = j; 
    }
    // if minimum is != arr[i] we swap 
    if (min !== i) swap(arr , i , min) ;
  }
  return arr ;
}

selection(arr) ;
console.log(arr);
