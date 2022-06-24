// recursive power function 
// 2³ = 2*2*2 
function power(base , exponant) {
    
    // base case 
    if(exponant === 1) return base ;

    // recall
    return base * power(base , exponant - 1) ;
}

console.log(power(2 , 10)) ;