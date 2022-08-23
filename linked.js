class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.next = null;
  }
  append(value) {
    const newNode = new node(value);
    let find = this.head;
    while (find.next != null) {
      find = find.next;
    }
    find.next = newNode;
  }
  prepend(value) {
    const newNode = new node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let find = this.head;
    let count = 0;
    while (find != null) {
      count++;
      find = find.next;
    }
    return count;
  }
  first() {
    return this.head.data;
  }
  last() {
    let find = this.head;
    while (find.next != null) {
      find = find.next;
    }
    return find.data;
  }
  at(index) {
    let find = this.head;
    for (let i = 0; i < index; i++) {
      find = find.next;
    }
    return find.data;
  }

  pop() {
    let find = this.head;
    while (find.next.next != null) {
      find = find.next;
    }
    find.next = null;
  }
  contains(value) {
    let find = this.head;
    while (find != null && find.data != value) {
      find = find.next;
    }
    return find === null ? false : true;
  }
  search(value) {
    let find = this.head;
    let count = 0;
    while (find != null && find.data != value) {
      find = find.next;
      count++;
    }
    return find != null
      ? count
      : 'Element does not exist in the list';
  }
  toString() {
    let find = this.head;
    let output = '';
    while (find != null) {
      output += `(${find.data}) - > `;
      find = find.next;
    }
    output += `null`;
    return output;
  }
  insertAt(value, index) {
    let findCount = this.head;
    let count = 0;
    while (findCount != null) {
      count++;
      findCount = findCount.next;
    }
    let find = this.head;
    if (index > count || index < 0) {
      console.log(
        'Error with insertAt: needs to be 0 or more and less than or equal to the list length',
      );
    } else {
      for (let i = 0; i < index - 1; i++) {
        find = find.next;
      }
      if (index === 0) {
        find.data = value;
      } else {
        find.next.data = value;
      }
    }
  }
  removeAt(index) {
    let findCount = this.head;
    let count = 0;
    while (findCount != null) {
      count++;
      findCount = findCount.next;
    }
    let find = this.head;
    if (index > count || index < 0) {
      console.log(
        'Error with removeAt: needs to be 0 or more and less than or equal to the list length',
      );
    } else {
      for (let i = 0; i < index - 1; i++) {
        find = find.next;
      }
      if (index === 0) {
        this.head = this.head.next;
      } else {
        find.next = find.next.next;
      }
    }
  }
}

export { node, LinkedList };
