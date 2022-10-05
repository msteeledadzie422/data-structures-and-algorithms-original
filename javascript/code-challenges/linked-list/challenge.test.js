'use strict';

const LinkedList = require('./challenge');

describe('Linked List', () => {
  let list = new LinkedList;

  test('1. Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  test('2. Can properly insert into the linked list', () => {
    list.insert('v');
    expect(list.head).toBeTruthy();
  });

  test('3. The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toBe('v');
    expect(list.head.next).toBeNull;
  });

  test('4. Can property insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('l');
    expect(list.head.value).toBe('l');
    expect(list.head.next.value).toBe('a');
  });

  test('5. Will return true when finding a value within the linked list that exists', () => {
    list.insert('u');
    expect(list.includes('u')).toBe(true);
  });

  test('6. Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('e');
    expect(list.includes(22)).toBe(false);
  });

  test('7. Can properly return a collection of all the values that exist in the linked list', () => {
    const testString = `{${'e'}} -> {${'u'}} -> {${'l'}} -> {${'a'}} -> {${'v'}} -> NULL`;
    expect(list.string()).toBe(testString);
  });
});
