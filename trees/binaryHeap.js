class MaxBinaryHeap {
  constructor() {
    this.values = [6];
  }

  // O(log(n))
  insert(element) {
    this.values.push(element);

    (function bubbleUp(list, childIndex) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      // if we reach an unvalid index we return
      if (parentIndex < 0) return;

      if (list[childIndex] <= list[parentIndex]) return;

      let temp = list[childIndex];
      list[childIndex] = list[parentIndex];
      list[parentIndex] = temp;

      bubbleUp(list, parentIndex);
    })(this.values, this.values.length - 1);
  }

  // O(log(n))
  extractMax() {
    // pop last element and unshift it back
    const max = this.values[0];
    this.values[0] = this.values.pop();

    // sinking down
    (function sinkDown(list, elementIndex) {
      if (2 * elementIndex + 1 > list.length - 1) return;

      // find children
      let leftChildIndex = 2 * elementIndex + 1;
      let rightChildIndex = 2 * elementIndex + 2;

      // if both children are greater than root element
      if (
        list[leftChildIndex] > list[elementIndex] &&
        list[rightChildIndex] > list[elementIndex]
      ) {
        // find greatest child index
        let greatestChildIndex =
          list[leftChildIndex] > list[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;

        // swap parent with greatestChild
        let temp = list[greatestChildIndex];
        list[greatestChildIndex] = list[elementIndex];
        list[elementIndex] = temp;

        // sink down
        sinkDown(list, greatestChildIndex);
      }
      // if left child is greater than parent element
      else if (list[leftChildIndex] > list[elementIndex]) {
        // swap with left child
        let temp = list[leftChildIndex];
        list[leftChildIndex] = list[elementIndex];
        list[elementIndex] = temp;

        sinkDown(list, leftChildIndex);
      }
      // if right child is greater than parent element
      else if (list[rightChildIndex] > list[elementIndex]) {
        // swap with right child
        let temp = list[rightChildIndex];
        list[rightChildIndex] = list[elementIndex];
        list[elementIndex] = temp;

        sinkDown(list, rightChildIndex);
      }
    })(this.values, 0);

    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap.values.toString());
console.log("max : ", heap.extractMax());
console.log(heap.values.toString());

/*
a heap is stored as an array of values 
if we want to find children of a node 
we calculate it this way :

* index of child 1 : 2n + 1
* index of child 2 : 2n + 2
! n : index of parent node

to find the parent of a node : 
* floor((m-1)/2)
! m is index of a node


the insert algorithm works by
1 - inserting the new node at the end of the array 
2 - start comparing the node with its parent 
3 - if node > parent then swap 
3 - repeat operation until node <= parent

two things to keep in mind : 
  * always remember that heaps can be represented as a list 
  * when inserting we always "BUBBLE UP" 
  * when extractingMax we aways "SINK DOWN"
*/
