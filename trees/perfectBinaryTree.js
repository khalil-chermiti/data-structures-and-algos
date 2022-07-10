class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class PerfectBinaryTree {
  constructor() {
    this.root = null;
  }

  // this only work with a perfect BT
  // all leaves are supposed to be at same level(depth)
  calculateDepth(){
    let depth = 0 ;
    let node = this.root ;

    while(node){
      depth = depth + 1 ;
      node = node.left ;
    }

    return depth - 1;
  }
  
  isPerfect(depth) {

    return (function recurse(node , depth , level = 1 ) {
      //check if node is null or not
      if(node === null) return true

      // if we reach leaves then level must be equal to depth
      // else it's not perfect BT
      if(!node.left && !node.right) // leaf
        return (depth === level - 1) ;

      // if one of the two child nodes is null 
      // then it's not a BT
      if(!node.left || !node.right) return false ;


      return(
        recurse(node.left , depth , level + 1) &&
        recurse(node.right , depth , level + 1) 
      );  

    })(this.root , depth) ;
  }

  // calculating the number of nodes
  calculateNodes(){

    function calculate(root) {
      if(root === null) return 0;
      return (1 + calculate(root.left) + calculate(root.right));
    }

    return calculate(this.root) ;
  }

  isPowerOfTwo(){
    const numOfNodes = this.calculateNodes() ;
    if((numOfNodes & (numOfNodes + 1)) === 0) return true ;
    else return false ;
  }
}


let PBT = new PerfectBinaryTree();

// depth : 0 , level 1 
PBT.root = new Node(10) ;

// depth : 1 , level 2 
PBT.root.left = new Node(7) ;
PBT.root.right = new Node(5) ;

// depth : 2 , level 3 
PBT.root.left.left = new Node(3) ;
PBT.root.left.right = new Node(1) ;
PBT.root.right.left = new Node(3) ;
PBT.root.right.right = new Node(1) ;



if(PBT.isPerfect(PBT.calculateDepth())){
  console.log("binary tree is perfect") ;
} else {
  console.log("binary tree is not perfect") ;
}

if(PBT.isPowerOfTwo()){
  console.log("binary tree is perfect") ;
} else {
  console.log("binary tree is not perfect") ;
}


/*
check if all leaves are at the same level
check if all internal nodes are full



for bitwise comparision : 
8 is 2³ // power of two

8 & 7 ==> 1111 & 0111 which gives 0000

so if n is power of two then n & n-1 === 0 

we did i use numOfnodes & numOfnodes + 1 

number of nodes in a perfect tree is always 2^h - 1 
it can't be power of two so we add one to make the
equation work
*/