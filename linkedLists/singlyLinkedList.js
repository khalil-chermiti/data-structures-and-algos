class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  traverse() {
    let pointer = this.head;
    while (pointer) {
      console.log(pointer.val);
      pointer = pointer.next;
    }
  }

  pop() {
    if (!this.head) return undefined;

    let newTail = this.head;
    let current = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // in case we popped the one node in the list
    // we should reset the head and tail variables to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const pointer = this.head;
    this.head = pointer.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return pointer;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  // statrts from 0
  get(index) {
    // out of range
    if (index >= this.length || index < 0) return null;

    let pointer = this.head;
    let counter = 0;
    while (counter < index) {
      pointer = pointer.next;
      counter++;
    }

    return pointer;
  }

  // updating a list node's value
  set(val, index) {
    foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(val, index) {
    // out of range
    if (index > this.length || index < 0) return false;

    //head
    if (index === 0) return !!this.unshift(val);

    //tail
    if (index === this.length) return !!this.push(val);

    //middle
    const newNode = new Node(val);
    const prevIndexNode = this.get(index - 1);
    newNode.next = prevIndexNode.next;
    prevIndexNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    // out of range
    if (index >= this.length || index < 0) return false;

    //head
    if (index === 0) return this.shift();

    //tail
    if (index === this.length - 1) return this.pop();

    // middle
    const prevIndexNode = this.get(index - 1);
    const nodeToRemove = prevIndexNode.next;

    prevIndexNode.next = nodeToRemove.next;

    this.length--;
    return nodeToRemove;
  }

  reverse() {
    // swapping head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < list.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  toArray() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

const list = new LinkedList();

// list.push(5);
// list.push(20);
// list.unshift(10);
// list.insert(1, 1);
// list.remove(1);
// // list.traverse();
// console.log(list.toArray());
// list.reverse();
// console.log(list.toArray());
