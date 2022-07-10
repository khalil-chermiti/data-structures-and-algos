class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class FullBinaryTree {
  constructor() {
    this.root = null;
  }

  // O(n)
  isFull() {
    if(this.root === null) return true ;

    return (function recurse(node) {
      //check if left and right are null
      if (!node.left && !node.right) return true ;

      // check if both nodes are not null
      // and then recurse into each one
      if(node.left && node.right) {
        return (recurse(node.left) && recurse(node.right)) ;
      }
      
      // otherwise return false
      return false;

    })(this.root);
  } 
}

let FBT = new FullBinaryTree() ;

FBT.root = new Node(10) ;
FBT.root.left = new Node(7) ;
FBT.root.right = new Node(5) ;
FBT.root.left.left = new Node(3) ;
FBT.root.left.right = new Node(1) ;

console.log(FBT.isFull()) ;

// console.log(FBT.root) ; 
