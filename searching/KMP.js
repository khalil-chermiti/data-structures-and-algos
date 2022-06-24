// the KMP algorithm O(n + m) => o(n)


function buildPrefixTable(pat) {
  
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
    else{
      // on the first element 
      if (i === 0) {
        LPS[j] = 0 ;
        j++ ;
      }
      // not on the first element 
      if (i !== 0) i = LPS[i - 1];
    }
  }
  
  return LPS ;
}

function KMP(string , pat) {
  
  let i = 0 ;
  let j = 0 ;
  let LPS = buildPrefixTable(pat) ;
  
  while (i < string.length) {
    
    // if characters match
    if (string[i] === pat[j] ) {
      i++ ;
      j++ ;
    } 
    
    // if characters mismatch 
    else {
    
      // mismatch with first character of the pattern
      if (j == 0){
        i++ ;
      }
      //mismatch somewhere else 
      else {
        j = LPS[j-1];
      }
    }
    
    // if one full match
    if (j === pat.length ) {
      console.log(`pattern found at : ${i - j}`);
      j = LPS[j - 1] ;
    }
  }
  
}
KMP('aabaaac' , 'aa') ;
buildPrefixTable('aa') ;