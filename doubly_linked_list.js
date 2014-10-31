function DblLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0
};

DblLinkedList.prototype.newNode = function(val) {
  var node = {
    val: val,
    next: null,
    prev: null
  };

  return node;
}


DblLinkedList.prototype.insert = function(val) {
  var node = this.newNode(val);

  if (this.length == 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;

  }
  this.length++;
  return node.val + 'has been added to the linked list.'
}


DblLinkedList.prototype.size = function(val) {
  return this.length;
}

DblLinkedList.prototype.search = function(val) {
  index = this.length
    if (index > 0) {
      var node = this.head;
      while (index-- && node.val != val) {
        node = node.next;
      }
      return node;
    }
};

var list = new DblLinkedList();
// console.log(list.size);
list.insert(14);
// console.log(list);
list.insert(20);
list.insert(8);
list.insert(16);
console.log(list);
console.log(list.size());
console.log(list.search(20));


