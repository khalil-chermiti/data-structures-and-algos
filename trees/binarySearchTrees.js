class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log(n))
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let pointer = this.root;

    while (true) {
      //check left side
      if (value === pointer.value) return this;
      if (value < pointer.value) {
        if (pointer.left === null) {
          pointer.left = newNode;
          return this;
        } else {
          pointer = pointer.left;
        }
      }

      //check right side
      if (value > pointer.value) {
        if (pointer.right === null) {
          pointer.right = newNode;
          return this;
        } else {
          pointer = pointer.right;
        }
      }
    }
  }

  // O(log(n))
  find(value) {
    if (this.root === null) return false;
    let pointer = this.root;

    while (pointer) {
      if (value === pointer.value) return pointer;
      else if (value < pointer.value) pointer = pointer.left;
      else if (value > pointer.value) pointer = pointer.right;
    }

    return false;
  }

  // O(log(n))
  find_rec(value) {
    return (function recurse(pointer, value) {
      if (pointer === null) return false;
      if (pointer.value === value) return pointer;

      if (value < pointer.value) return recurse(pointer.left, value);
      if (value > pointer.value) return recurse(pointer.right, value);
    })(this.root, value);
  }

  // O(log(n))
  reverse() {
    (function recurse(pointer) {
      if (pointer === null) return;

      let temp = pointer.left;
      pointer.left = pointer.right;
      pointer.right = temp;

      recurse(pointer.right);
      recurse(pointer.left);
    })(this.root);
  }

  // level order breadth first search
  BFS() {
    if (this.root === null) return [];
    const nodesQueue = [];
    const nodes = [];
    let pointer = null;

    nodesQueue.push(this.root);

    while (nodesQueue.length) {
      pointer = nodesQueue.shift();
      nodes.push(pointer.value);

      if (pointer.left) nodesQueue.push(pointer.left);
      if (pointer.right) nodesQueue.push(pointer.right);
    }

    return nodes;
  }

  BFS_REC() {
    if (this.head === null) return [];

    const nodes = [];
    const nodesQueue = [];
    nodesQueue.push(this.root);

    (function recurse() {
      if (!nodesQueue.length) return;

      let node = nodesQueue.shift();
      nodes.push(node.value);

      // we add all nodes with the same level to the queue in order
      if (node.left) nodesQueue.push(node.left);
      if (node.right) nodesQueue.push(node.right);

      recurse();
    })();

    return nodes;
  }

  DFS_PREORDER() {
    let nodes = [];

    (function recurse(node) {
      if (!node) return;

      // push current nodes value to the array
      nodes.push(node.value);

      // deep left recursion
      recurse(node.left);

      // deep right recursion
      recurse(node.right);
    })(this.root);

    return nodes;
  }

  DFS_POSTORDER() {
    let nodes = [];

    (function recurse(node) {
      if (!node) return;

      // deep left recursion
      recurse(node.left);

      // deep right recursion
      recurse(node.right);

      // lastly push current nodes value to the array
      nodes.push(node.value);
    })(this.root);

    return nodes;
  }

  DFS_INORDER() {
    let nodes = [];

    (function recurse(node) {
      if (!node) return;

      // deep left recursion
      recurse(node.left);

      // lastly push current nodes value to the array
      nodes.push(node.value);

      // deep right recursion
      recurse(node.right);
    })(this.root);

    return nodes;
  }
}

const BST = new BinarySearchTree();
BST.insert(4);
BST.insert(10);
BST.insert(1);
BST.insert(40);
BST.insert(2);
BST.insert(7);
BST.insert(0);

//               4
//         +------------+
//         1            10
//      +------+     +------+
//      0      2     7      40

console.log("search node.val === 1 :\n", BST.find_rec(40));

console.log("BFS  :", JSON.stringify(BST.BFS()));
console.log("BFS recursive :", JSON.stringify(BST.BFS_REC()));

console.log("DFS preorder :", JSON.stringify(BST.DFS_PREORDER()));
console.log("DFS postorder :", JSON.stringify(BST.DFS_POSTORDER()));
console.log("DFS inorder :", JSON.stringify(BST.DFS_INORDER()));

BST.reverse();
console.log("BST reversed DFS inorder :", JSON.stringify(BST.DFS_INORDER()));

/*
! time complexity :
* insertion : O(log(n))
* searching : O(log(n))  
* traversal : O(n) => we have to visit each node

=================================================

! space complexity : (BFS vs DFS)

* it depends on the shape of the tree : 

wide trees : a tree with a lot of children 
* BFS : the more children the bigger is the queue so time complexity increases
* DFS : number of children in a node doesn't matter because we traverse vertically 
* so the call stach won't take as much space as for a queue

narrow trees : like in case of a onsided tree , when it grows in height not in width 
* BFS : the number of children will be small , so the queue won't take much memory
* DFS : because of the long depth of the tree , we will have a long call stack wich will 
* require much more memory than a queue

DFS inorder => in case of a binary tree it returns a sorted array of nodes 
DFS preorder => can be used to copy a tree (rebuild it from the outputted array of nodes)
*/
