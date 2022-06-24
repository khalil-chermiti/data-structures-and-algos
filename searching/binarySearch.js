// binary search 

let tab = [0,1,2,3,4,5,6,7,8,9] ;
let search = 5 ;


binarySearch(tab , search);

function binarySearch (arr , el) {
  // start
  let start = 0 ;
  // end 
  let end = arr.length - 1 ;
  // middle
  let middle = parseInt('10', (start + end) / 2) ;
  
  while (el !== middle && start < end ) {
    
    if(el > arr[middle] ) start = middle + 1 ;
    if(el < arr[middle] ) end = middle - 1 ;
    
    middle = parseInt('10' , (start + end) / 2) ;
  }
  
  if (arr[middle] === el) console.log(`element found at arr[${middle + 1}]`) ;
  else {console.log("element not found")} ;
}