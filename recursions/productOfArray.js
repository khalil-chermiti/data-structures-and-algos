function productOfArray(arr , index = 0 ) {
    
    // base case 
    if (index === arr.length - 1) return arr[index] ;
    
    // recall 

    return arr[index] * productOfArray(arr , index + 1 ) ;
}

console.log(productOfArray([2,2,2]))