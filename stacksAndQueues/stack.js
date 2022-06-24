/*
implementing a stack using a linked list 
is constant time O(1) which is far much better
than using arrays
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // O(1)
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // O(1)
  pop() {
    if (this.first === null) return null;
    const temp = this.first;

    if (this.last === this.first) {
      this.last === null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
