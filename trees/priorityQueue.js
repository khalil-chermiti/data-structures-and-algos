class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [6];
  }

  // O(log(n))
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    (function bubbleUp(list, childIndex) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      // if we reach an unvalid index we return
      if (parentIndex < 0) return;

      if (list[childIndex].priority <= list[parentIndex].priority) return;

      let temp = list[childIndex];
      list[childIndex] = list[parentIndex];
      list[parentIndex] = temp;

      bubbleUp(list, parentIndex);
    })(this.values, this.values.length - 1);
  }

  // O(log(n))
  dequeue() {
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
        list[leftChildIndex].priority > list[elementIndex].priority &&
        list[rightChildIndex].priority > list[elementIndex].priority
      ) {
        // find greatest child index
        let greatestChildIndex =
          list[leftChildIndex].priority > list[rightChildIndex].priority
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
      else if (list[leftChildIndex].priority > list[elementIndex].priority) {
        // swap with left child
        let temp = list[leftChildIndex];
        list[leftChildIndex] = list[elementIndex];
        list[elementIndex] = temp;

        sinkDown(list, leftChildIndex);
      }
      // if right child is greater than parent element
      else if (list[rightChildIndex].priority > list[elementIndex].priority) {
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

const heap = new priorityQueue();
heap.enqueue(10, 55);
heap.enqueue(20, 39);
heap.enqueue(30, 41);
heap.enqueue(40, 18);
heap.enqueue(50, 27);
heap.enqueue(60, 12);
heap.enqueue(70, 33);
console.log(heap.values);
console.log("max : ", heap.dequeue());
console.log(heap.values);

/*
a little misconception about priority queue is 
that some expect priority queue keep node 
or elements ordered ,however thats not the fact 
priority queue main purpose :
* is to return the element with the highest priority  
* that's because the sink down algorithm that always
* keep elements with highest priority on top of the queue


we can add another condition to check for priority equality 
well in real life scenarios when
*/
