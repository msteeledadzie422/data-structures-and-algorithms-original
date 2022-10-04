'use strict';

const { LinkedList, zipLists } = require('../index');

function createList (arr){
  let list = new LinkedList;
  arr.forEach(value => list.append(value));
  return list;
}

describe('zip test', () => {

  it('zip two sorted lists', () => {
    let ls1 = new LinkedList;
    let ls2 = new LinkedList;
    ls1.append(1);
    ls1.append(3);
    ls1.append(5);

    ls2.append(2);
    ls2.append(4);
    ls2.append(6);

    let createdList = createList([1,2,3,4,5,6]);

    let zipList = zipLists(ls1, ls2);

    expect(zipList).toStrictEqual(createdList);
  });

  it('Where list 2 is shorter than list 1', () => {
    let ls1 = new LinkedList;
    let ls2 = new LinkedList;

    ls1.append(1);
    ls1.append(3);
    ls1.append(5);
    ls1.append(7);

    ls2.append(2);
    ls2.append(4);

    let createdList = createList([1,2,3,4,5,7]);

    let zipList = zipLists(ls1, ls2);

    expect(zipList).toStrictEqual(createdList);
  });

  it('Where list 1 head is null', () => {
    let ls1 = new LinkedList;
    let ls2 = new LinkedList;

    ls2.append(2);
    ls2.append(4);

    let createdList = createList([2,4]);

    let zipList = zipLists(ls1, ls2);

    expect(zipList).toStrictEqual(createdList);
  });
});


