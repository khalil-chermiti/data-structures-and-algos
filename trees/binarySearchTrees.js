// binary search tree

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
}

const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(10);
BST.insert(3);
BST.insert(40);
BST.insert(2);

BST.find(0);

// console.log(BST.root);

/*
insertion and searching is O(log(n))  
but in worst cases we would have a one sided BST
which is more like a linear data structure so we may 
end up with O(n)
*/
