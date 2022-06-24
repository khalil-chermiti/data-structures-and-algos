function recursiveRange(number) {

    if(number === 0) return 0 ;
    if(number === 1) return 1 ; 

    return number + recursiveRange(number- 1) ;
}

console.log(recursiveRange(3)) ;