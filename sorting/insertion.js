// non sorted array 
let arr = [12,7,44,56,14,48,42,25,1,42,36,48,75,21,14] ;

/*
@ insertion sort
* we save the current element
* we shift right all elements that are greater than current element 
* we insert the current element after we're done shifting 
* O(n²)
* if the array data are coming as a stream then insertion sort is a great choice
*/

 
function insertion(arr) {
  for(var i = 1 ; i < arr.length ; i++ ) {
    // current value and previous index
    var currentElement = arr[i] ; 
    var prevInd = i - 1 ;  
    
    //whenever prevInd is valid and previous element is bigger than current element shift right 
    while(prevInd >= 0 && arr[prevInd] > currentElement) {
      arr[prevInd + 1] = arr[prevInd] ; 
      prevInd-- ;
    }
    
    //when we break out of the second loop we set the last element to the currentElement 
    arr[prevInd + 1] = currentElement;
  }
  
  return arr ;
}

insertion(arr) ;

/* 
* example : [3,2,1]
itr 1 :
[3,2,1]
[3,3,1]
[2,3,1]

itr 2 : 
[2,3,1]
[2,3,3]
[2,2,3]
[1,2,3]

==> we are sliding the values up 
==> whenever arr[prevInd] > currentElement
*/