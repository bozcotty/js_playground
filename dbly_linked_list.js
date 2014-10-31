function DblLinkedList() {
  this.length = 0;
  this.tail = null;
  this.head = null;
};

DblLinkedList.prototype.newNode = function(value) {
    var node = {
      value: value,
      next: null,
      prev: null
    };
    return node;
};


DblLinkedList.prototype.insert = function(value) {
    var node = this.newNode(value);

    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    }  else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return node.value + ' has been added to the linked list.';
  };


DblLinkedList.prototype.size = function(value){
  return this.length
};


DblLinkedList.prototype.search = function(value) {
  index = this.length
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.value != value) {
      node = node.next;
    }
    return node;
  }
};


DblLinkedList.prototype.remove = function(value){
  index = this.length
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.value != value) {
      node = node.next;
    }
    if (node == this.head) {
      this.head = node.next
      node.next.prev = null
    }
    if (node == this.tail) {
      this.tail = node.prev
      node.prev.next = null
    } else {
      node.next.prev = node.prev
      node.prev.next = node.next
    }
  }
};


DblLinkedList.prototype.showAll = function() {
  index = this.length
  val = this.tail.value
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.value != val) {
      console.log(node.value);
      node = node.next;
    }
    console.log(node.value);
    return '';
  }
};


DblLinkedList.prototype.to_str = function(){
  index = this.length
  array = []
  if (index >= 0) {
    var node = this.head;
    while (index-- && index != 0) {
      array.push(node)
      node = node.next;
    }
    stringArray = []
    for (var i = 0; i < array.length; i++) {
      stringArray.push(array[i].value);
    }
    console.log(stringArray.toString())
    return '';
  }

};


var list = new DblLinkedList()

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log('Test list size(): (should be 5). List size: ' + list.size())
console.log('')
console.log('Test: insert a new node. Insert(10), and "10" should be added:')
console.log(list.insert('10'))
console.log('')
console.log('Test search(val): the list for the "3" that was just inserted. Value: ' + list.search(3).value)
console.log('')
list.remove('5')
console.log('Test remove(val): the list should be lacking the number "5":')
console.log(list.showAll())
console.log('')
console.log('The list should not have "5" anymore. List to_str:')
console.log(list.to_str())
