'use strict';

const LinkedList = require('../lib/linked-list');

const linkedListTest = new LinkedList();

for (let i = 0; i < 5; i++) {
  linkedListTest.insertAtHead(i);
  console.log(linkedListTest);
}

describe('LinkedList.remove Tests', () => {
  test('Testing for successful removal', () => {
    const nodeRemoved = linkedListTest.remove(2);
    expect(nodeRemoved).toEqual(5);
  });
});
