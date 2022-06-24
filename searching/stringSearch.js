// naive string search alogorithm O(n²) 

// approach 1

let string = 'khalil is a great man' ;
let pattern = 'great' ;

function stringSearch1(str , pat) {
  for(let i = 0 ; i < str.length  ; i++ ) {
    for(let j = 0 ; j < pat.length ; j++) {
      
      // if two characters does not match ;
      if(pat[j] !== str[i+j]) break ;
      
      // if pattern matches ;
      if(j === pat.length - 1) console.log(`alg 1 : match at index ${i}`) ;
    }
  }  
}


stringSearch1(string , pattern );


// approach 2 


function stringSearch2(str , pat) {
  for (let i = 0 ; i < str.length - pat.length ; i++) {
    if (str[i] === pat[0]) {
      let j = 0 ;
      while(pat[j] === str[i+j] && j < pat.length){
        if (j === pat.length - 1) console.log(`alg 2 : match at index ${i}`);
        j++ ;
      }
    }
  }
}

stringSearch2(string , pattern) ;


function prefix(pat) {
  let LPS = [] ;
  let i = 0 ;
  let j = 1 ;
  LPS[0] = 0 ;
  
  while(j < pat.length) {
    
    // if a match 
    if(pat[i] === pat [j]) {
      LPS[j] = i + 1 ;
      j++ ;
      i++ ;
    }
    
    // if a missmatch occures
    if(pat[i] !== pat[j]) {
      // on the first element 
      if (i === 0) {
        LPS[j] = 0 ;
        j++ ;
      }
      // not on the first element 
      if (i !== 0) i--;
    }
  }
  
  return LPS ;
}

prefix('aabaaaac') ;