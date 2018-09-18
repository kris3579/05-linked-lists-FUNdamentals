'use strict';

const LinkedList = require('../lib/linked-list');

const linkedListTest = new LinkedList();
const emptyLinkedList = new LinkedList();

for (let i = 0; i < 5; i++) {
  linkedListTest.insertAtHead(i);
}

describe('LinkedList.remove Tests', () => {
  test('Testing for successful removal', () => {
    linkedListTest.remove(2);
    expect(linkedListTest.head.next.next.value).toEqual(2);
  });
  test('Testing for failure due to empty list', (done) => {
    expect(() => emptyLinkedList.remove(1)).toThrow();
    done();
  });
});
