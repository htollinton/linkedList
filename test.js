import { LinkedList, node } from './linked';

let node1 = new node(2);
let node2 = new node(5);
node1.next = node2;
let list = new LinkedList(node1);

test('next node', () => {
  expect(list.head.next.data).toEqual(5);
});

test('append node', () => {
  list.append(10);
  list.append(2);
  expect(list.head.next.next.data).toEqual(10);
  expect(list.head.next.next.next.data).toEqual(
    2,
  );
});

test('prepend node', () => {
  list.prepend(20);
  expect(list.head.data).toEqual(20);
  expect(list.head.next.data).toEqual(2);
});

test('size', () => {
  expect(list.size()).toEqual(5);
  let zeroList = new LinkedList();
  expect(zeroList.size()).toEqual(0);
});
test('first', () => {
  expect(list.first()).toEqual(20);
});

test('last', () => {
  expect(list.last()).toEqual(2);
});

test('index', () => {
  expect(list.at(4)).toEqual(2);
  expect(list.at(0)).toEqual(20);
  expect(list.at(list.size() - 1)).toEqual(
    list.last(),
  );
});

test('pop', () => {
  list.pop();
  expect(list.last()).toEqual(10);
  list.pop();
  expect(list.last()).toEqual(5);
  expect(list.size()).toEqual(3);
});

test('contains', () => {
  let listContains = new LinkedList(node1);
  listContains.append(3);
  listContains.append(4);
  listContains.append(5);
  expect(listContains.contains(3)).toBe(true);
  expect(listContains.contains('yes')).toBe(
    false,
  );
});

test('search', () => {
  let testNode = new node(1);
  let listSearch = new LinkedList(testNode);
  listSearch.append(3);
  listSearch.append(4);
  listSearch.append(5);
  expect(listSearch.search(4)).toEqual(2);
  expect(listSearch.search(410)).toEqual(
    'Element does not exist in the list',
  );
});

test('toString', () => {
  let testNode = new node(1);
  let listTest = new LinkedList(testNode);
  listTest.append(3);
  listTest.append(4);
  listTest.append(5);
  expect(listTest.toString()).toEqual(
    '(1) - > (3) - > (4) - > (5) - > null',
  );
});
test('insertAt', () => {
  let testNode = new node(1);
  let listTest = new LinkedList(testNode);
  listTest.append(3);
  listTest.append(4);
  listTest.append(5);
  listTest.insertAt('insert a string', 2);
  expect(listTest.toString()).toEqual(
    '(1) - > (3) - > (insert a string) - > (5) - > null',
  );
  listTest.insertAt('another test', 0);
  expect(listTest.toString()).toEqual(
    '(another test) - > (3) - > (insert a string) - > (5) - > null',
  );
  listTest.insertAt('a third test', 1);
  expect(listTest.toString()).toEqual(
    '(another test) - > (a third test) - > (insert a string) - > (5) - > null',
  );

  listTest.insertAt('a a fourth test', 10);
  expect(listTest.toString()).toEqual(
    '(another test) - > (a third test) - > (insert a string) - > (5) - > null',
  );
});
test('removeAt', () => {
  let testNode = new node(1);
  let listTest = new LinkedList(testNode);
  listTest.append(3);
  listTest.append(4);
  listTest.append(5);
  listTest.removeAt(0);
  expect(listTest.toString()).toEqual(
    '(3) - > (4) - > (5) - > null',
  );
  listTest.removeAt(1);
  expect(listTest.toString()).toEqual(
    '(3) - > (5) - > null',
  );
  listTest.append('hello');
  listTest.removeAt(-1);
  listTest.removeAt(20);
  listTest.removeAt(1);
  expect(listTest.toString()).toEqual(
    '(3) - > (hello) - > null',
  );
});
