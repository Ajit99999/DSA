class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(value) {
    const node = new Node(value);
    // if the linkedList is empty
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const existingHead = this.head;
      this.head = node;
      node.next = existingHead;
    }
    this.size = this.size + 1;
  }

  insertLast(value) {
    if (this.size === 0) {
      this.insertFirst(value);
      return;
    } else {
      const node = new Node(value);
      const existingTail = this.tail;
      existingTail.next = node;
      this.tail = node;
    }
    this.size = this.size + 1;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      this.insertFirst(value);
      return;
    }
    if (index === this.size - 1) {
      this.insertLast(value);
      return;
    }
    if (index >= this.size) {
      console.log("The given index is out of range.");
      return;
    }
    const node = new Node(value);
    let temp = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index - 1) {
        const nextNode = temp.next;
        temp.next = node;
        node.next = nextNode;
      }
      temp = temp.next;
    }
    this.size = this.size + 1;
  }

  deleteFirst() {
    this.isEmpty();
    if (this.size === 1) {
      node = this.head;
      this.head = null;
      this.tail = null;
      return node.value;
    }
    const node = this.head;
    this.head = node.next;
    node.next = null;
    this.size = this.size - 1;
    return node.value;
  }
  deleteLast() {
    this.isEmpty();
    if (this.size === 1) {
      node = this.head;
      this.head = null;
      this.prev = null;
      node.next = null;
      return node.value;
    }
    let temp = this.head;
    for (let i = 0; i <= this.size - 1; i++) {
      if (i === this.size - 2) {
        const lastNode = temp.next;
        temp.next = null;
        this.tail = temp;
        this.size = this.size - 1;
        return lastNode.value;
      }
      temp = temp.next;
    }
  }

  deleteAtIndex(index) {
    this.isEmpty();
    if (index === 0) {
      return this.deleteFirst();
    }
    if (index === this.size - 1) {
      return this.deleteLast();
    }

    if (index >= this.size) {
      console.log("The given index is out of range.");
      return;
    }
    let temp = this.head;
    for (let i = 0; i <= this.size - 1; i++) {
      if (i === index - 1) {
        const deletedNode = temp.next;
        temp.next = temp.next.next;
        this.size = this.size - 1;
        return deletedNode.value;
      }
      temp = temp.next;
    }
  }
  display() {
    if (this.size === 0) {
      this.isEmpty();
    } else {
      let temp = this.head;
      let linkedListDisply = "";
      while (temp.next !== null) {
        linkedListDisply = `${linkedListDisply}-->${temp.value}`;
        temp = temp.next;
      }
      linkedListDisply = `${linkedListDisply}-->${temp.value}`;
      console.log(linkedListDisply);
    }
  }

  length() {
    return this.size;
  }

  isEmpty() {
    if (this.size === 0) {
      console.log("LinkedList is empty");
      return;
    }
  }
}

const l1 = new LinkedList();

l1.insertFirst(10);
l1.insertLast(12);
l1.insertLast(15);
l1.insertLast(119);
l1.insertAtIndex(2, 30);
l1.insertAtIndex(4, 25);
l1.insertAtIndex(5, 250);
l1.insertAtIndex(1, 300);
l1.display();
console.log(l1.deleteFirst());
console.log(l1.deleteLast());
l1.display();
l1.display();
console.log(l1.deleteAtIndex(0));
console.log(l1.deleteAtIndex(3));
console.log(l1.deleteAtIndex(2));
l1.display();
console.log(l1.length());
