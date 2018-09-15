'use strict';

const LinkedList = require('../lib/linked-list');

const linkedListTest = new LinkedList();

for (let i = 0; i < 5; i++) {
  linkedListTest.insertAtHead(i);
  console.log(linkedListTest);
}
