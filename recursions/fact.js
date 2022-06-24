// recursive fact function 

function fact(num){
    //base condition 
    if (num === 1 | num === 0) return 1 ; 
    //recall 
    return num * fact(num - 1 ) ;
}


console.log(fact(8)) ;