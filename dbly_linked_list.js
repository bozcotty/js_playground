// A doubly linked list with js

// looking forward and back from each item in list
// constructor function initializes object in js (below 5-13);
function I90(state, west, east) {
  this.state = state;
  this.west = west;
  this.east = east;
  // exit =seccession from the union
  this.exit = function() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
  };
}

var s1 = new State("WA", null, null);
// console.log

var s2 = new State("ID", "WA", null);
s1.next = s2;

// console.log(c2);

var s3 = new State("MT", "ID", null);
s2.next = s3;

// console.log(c3);

var c4 = new State("WY", c3, c1);
s3.next = s4;
c1.prev = c4;

c3.exit();

console.log(c4);

// this below instead of this.ext = function in lines 9-12 above ( put in after line 13)
// Car.prototype.exit = function() {
//   this.prev.next = this.next;
//   this.next.prev = this.prev;
// }

// c3.exit();
