function reverseString(string , max = string.length - 1) {

    if (max === 0) return string[0] ;

    return string[max] + reverseString(string , max - 1) ;

}

console.log(reverseString('khalil chermiti')) ;