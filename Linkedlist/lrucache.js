class Node {
  constructor(key, value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.key = key;
  }
}
class LRUCache {
  #size;
  #map;
  #head;
  #tail;
  #length;
  constructor(size) {
    this.#size = size;
    this.#map = new Map();
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }
  #removeNode(node) {
    // if there is only one node, then remove it
    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
      return;
    }

    // if the node is the head node
    if (node === this.#head) {
      this.#head = node.next;
      this.#head.prev = null;
      return;
    }
    if (node === this.#tail) {
      this.#tail = node.prev;
      this.#tail.next = null;
      return;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  #addNodeToFront(node) {
    if (this.#head === null && this.#tail === null) {
      this.#head = node;
      this.#tail = node;
      return;
    }

    node.next = this.#head;
    this.#head.prev = node;
    node.prev = null;
    this.#head = node;
  }

  #moveToFront(node) {
    this.#removeNode(node);
    this.#addNodeToFront(node);
  }

  put(key, value) {
    if (key === undefined || value === undefined) {
      throw new Error("Invalid input");
    }
    //  if the key already exists
    if (this.#map.has(key)) {
      const node = this.#map.get(key);
      this.#moveToFront(node);
      node.value = value;
      return node.value;
    }

    if (this.#size === this.#length) {
      // first I will try to remove the tail node
      //  then insert the new node to the front of the linkedList
      //   also we have to remove the from the cache & also set the new node to the cache
      const tailNode = this.#tail;
      this.#removeNode(tailNode);
      this.#map.delete(tailNode.key);
      const node = new Node(key, value);
      this.#addNodeToFront(node);
      this.#map.set(key, node);
      return;
    }

    // if the key doesnot present at all in the cache
    if (!this.#map.has(key)) {
      //   first create a node
      // then put it one to the front of the cache.
      //   set the cache first
      const node = new Node(key, value);
      this.#addNodeToFront(node);
      this.#map.set(key, node);
      this.#length++;
      return;
    }
  }
  get(key) {
    if (!this.#map.has(key)) {
      return -1;
    }
    // if the key exists then move the node to front ( by first removing the node, then move the node to the front)
    const node = this.#map.get(key);
    this.#moveToFront(node);
    return node.value;
  }

  display() {
    console.log(this.#map.size, "LRU cache");
  }
  displayLinkedList() {
    let temp = this.#head;
    let str = "";
    while (temp !== null) {
      str += `${temp.value}-->`;
      temp = temp.next;
    }
    return str;
  }
}

const lru = new LRUCache(2);

lru.put(1, 10);
lru.put(2, 20);
console.log(lru.get(1));
console.log(lru.displayLinkedList());

lru.put(3, 30);
console.log(lru.displayLinkedList());
lru.display();
console.log(lru.get(2));
console.log(lru.get(3));
console.log(lru.displayLinkedList());
lru.put(4, 40);
console.log(lru.displayLinkedList());
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.displayLinkedList());
console.log(lru.get(4));
console.log(lru.displayLinkedList());
lru.put(4, 100);
console.log(lru.get(4));
console.log(lru.displayLinkedList());
