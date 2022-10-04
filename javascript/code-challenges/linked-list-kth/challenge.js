'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  string() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    return string + 'NULL';
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;
    if (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  before(value, newValue) {
    if (this.head.value === value) {
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  after(value, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  kthFromEnd(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    let result = length - k;
    if (result < 1 || result > length) return 'Exception';
    current = this.head;
    for (let i = 1; i < result; i++) {
      current = current.next;
    }
    return current.value;
  }
}

module.exports = LinkedList;
