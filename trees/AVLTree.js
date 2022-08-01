// implementation of AVL tree in javascript

// B = H(l) - H(r)
// H = max( H(l) , H(r)) + 1

// the height is recalculated on every update

// vary important : 
  // if node is null then height is - 1
  // if node is a leaf then height is 0 

class Node {
  constructor(key) {
    this.key = key;
    this.height = 0;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  leftRotate(x) {
    let y = x.right;
    let yLeft = y.left;

    y.left = x;
    x.right = yLeft;

    // recalculate height of
    // x
    x.height = this.max(this.getHeight(x.left), this.getHeight(x.right));
    // y
    y.height = this.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  rightRotate(x) {
    let y = x.left;
    let yRight = y.right;

    y.right = x;
    x.left = yRight;

    // recalculate height of
    // x
    x.height = 1 + this.max(this.getHeight(x.left), this.getHeight(x.right));
    // y
    y.height = 1 + this.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  getHeight(node) {
    if (node === null) return -1;
    return node.height;
  }

  getBalance(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  max(a, b) {
    return a > b ? a : b;
  }

  insert(key) {
    let recursiveInsert = (node, key) => {
      if (node === null) return new Node(key);

      // insertion 
      if (key < node.key) 
        node.left = recursiveInsert(node.left, key);
      else if (key > node.key) 
        node.right = recursiveInsert(node.right, key);
      else return node;

      // updating the height and calculating balance
      node.height =
        this.max(
          this.getHeight(node.left),
          this.getHeight(node.right)
        ) + 1 ;
      let newBalance = this.getBalance(node);

      // rotation on balance change
      // right
      if (newBalance > 1 && key < node.left.key) {
        return this.rightRotate(node);
      }
      // left
      if (newBalance < -1 && key > node.right.key) {
        return this.leftRotate(node);
      }
      // left right
      if (newBalance > 1 && key > node.left.key) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
      // right left
      if (newBalance < -1 && key < node.right.key) {
        node.right = this.rightRotate(this.right);
        return this.leftRotate(node);
      }
      
      // if no changed balance
      return node;
    };    

    this.root = recursiveInsert(this.root , key);
  }

  delete(key) {
    const deleteNode = (root , key) => {

      // PART I : find node and delete it
      if (root === null) return root ; 

      // recursively search for node
      if (key < root.key) 
        root.left = deleteNode(root.left , key) ;
      else if (key > root.key) 
        root.right = deleteNode(root.right , key) ;
      
      // in case we found node
      else {
        if (root.left === null) return root.right ;
        if (root.right === null) return root.left ; 

        // if both left and right are not null 
        // find max value and assign it to root 
        root.key = this.getMaxNode(root.right).key ;
        root.right = deleteNode(root.right , root.key) ;
      }

      // if tree had only one node then it must be null after deletion
      if(root === null) return root ;

      // PART II : update height on each delete
      root.height = this.max(
        this.getHeight(root.left),
        this.getHeight(root.right)
      ) + 1;

      // PART III : get balance and rotate the tree 
      const balance = this.getBalance(root) ;
      
      if (balance > 1 && this.getBalance(root.left) >= 0) {
        // right rotate
        return this.rightRotate(root);
      }

      if (balance > 1 && this.getBalance(root.left) < 0) {
        // left right rotate
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }

      if (balance < -1 && this.getBalance(root.right) <= 0) {
        // left rotate
        return this.leftRotate(root);
      }

      if (balance < -1 && this.getBalance(root.right) < 0 ) {
        // right left rotate
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }

      return root ;
    }

    this.root = deleteNode(this.root , key) ;
  }

  getMaxNode(node) {
    if (node === null) return node;

    let temp = node ;
    while (temp.right) {
      temp = temp.right
    }
    return temp ;
  }
}

let avl = new AVLTree();

avl.insert(10);
avl.insert(8);
avl.insert(5);
avl.insert(1);
avl.delete(8);

console.log(avl.root);
