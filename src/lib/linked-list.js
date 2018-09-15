'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // insertAtHead Big-O Runtime: O(1)
  insertAtHead(value) {
    const node = new Node(value); // O(1)

    node.next = this.head; // O(1)
    this.head = node; // O(1)
    return this; // O(1)
  }

  // find Big-O Runtime: O(n)
  find(value) {
    if (!this.head) { // O(1)
      throw new Error('__ERROR__ The list is empty'); // O(1)
    }

    if (this.head.value === value) { // O(1)
      return this.head; // O(1)
    }

    let currentNode = this.head; // O(1)
    while (currentNode.next) { // O(n)
      if (currentNode.next.value === value) { // O(1)
        return currentNode.next; // O(1)
      }
      currentNode = currentNode.next; // O(1)
    }
    return null; // O(1)
  }

  // remove Big-O Runtime: O(n)
  remove(offset) {
    if (!this.head) { // O(1)
      throw new Error('__ERROR__ The list is empty'); // O(1)
    }

    let currentNode = this.head; // O(1)
    while (currentNode.next) { // O(n)
      if (currentNode.next === offset) { // O(1)
        currentNode.next = currentNode.next.next; // O(1)
      }
      currentNode = currentNode.next; // O(1)
    }
    console.log(this);
    return this; // O(1)
  }
};

const linkedListTest = new LinkedList();
console.log('lskjflaskdjf', linkedListTest);

for (let i = 0; i < 5; i++) {
  linkedListTest.insertAtHead(i);
}
