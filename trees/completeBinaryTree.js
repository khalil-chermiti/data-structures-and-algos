class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class completeBinaryTree {
  constructor() {
    this.root = null;
  }

  calculateNodes(){

    function numOfNodes(node) {
      if (node === null) return 0 ;
      
      return (1 + numOfNodes(node.left) + numOfNodes(node.right)) ;
    }

    return numOfNodes(this.root) ;
  }

  isComplete(){

    function recurse(root , index , numberOfNodes){

      if(root === null) return true ; 

      // if index is out of tree length(number of nodes)
      if(index >= numberOfNodes) return false ;

      return(
        recurse(root.left , 2 * index + 1 , numberOfNodes) &&
        recurse(root.right , 2 * index + 2 , numberOfNodes)
      );
    }

    return recurse(this.root , 0 , this.calculateNodes());
  }
}

let CBT = new completeBinaryTree() ;

CBT.root = new Node(10) ;

CBT.root.left = new Node(7) ;
CBT.root.right = new Node(5) ;

CBT.root.left.left = new Node(3) ;
CBT.root.left.right = new Node(1) ;

console.log(CBT.isComplete())


/*
each time we compare the index of the node with 
the number of nodes if the index is greater or equal to 
the number of nodes then the tree is not complete

let's take this tree :
            8
    5               4
1       x       x       2

numOfNodes = 5
index of node with value 2 : 6 => (2 * 2 + 2)
6 > 5 so it is not complete 

*/