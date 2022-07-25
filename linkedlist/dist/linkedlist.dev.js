"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkedList =
/*#__PURE__*/
function () {
  //
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.length = 0;
  } //insert from head


  _createClass(LinkedList, [{
    key: "insertAtHead",
    value: function insertAtHead(data) {
      var newHead = new LinkedListNode(data, this.head);
      this.head = newHead;
      this.length++;
    } //search by index

  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      if (index < 0 || index >= this.length) return null;
      var current = this.head;

      for (var i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    } //delete the element at head

  }, {
    key: "removeHead",
    value: function removeHead() {
      this.head = this.head.next;
      this.length--;
    } //remove element at index

  }, {
    key: "removeAtIndex",
    value: function removeAtIndex(index) {
      if (index === 0) return this.removeHead();
      var prev = this.getByIndex(index - 1);
      if (prev == null) return null;
      prev.next = prev.next.next;
      this.length--;
    }
  }, {
    key: "insertAtIndex",
    value: function insertAtIndex(index, value) {
      if (index === 0) return this.insertAtHead(value);
      var prev = this.getByIndex(index - 1);
      if (prev == null) return null;
      prev.next = new LinkedListNode(value, prev.next);
      this.length++;
    }
  }, {
    key: "print",
    value: function print() {
      var output = '';
      var current = this.head;

      while (current) {
        output = "".concat(output).concat(current.value, " -> ");
        current = current.next;
      }

      console.log("".concat(output, "null"));
    }
  }]);

  return LinkedList;
}(); //node class


var LinkedListNode = function LinkedListNode(value, next) {
  _classCallCheck(this, LinkedListNode);

  this.value = value;
  this.next = next;
}; //helper function for populating


LinkedList.fromValues = function () {
  var ll = new LinkedList(); //looping from behind to popular our linkedlist

  for (var i = arguments.length - 1; i >= 0; i--) {
    ll.insertAtHead(i < 0 || arguments.length <= i ? undefined : arguments[i]);
  }

  return ll;
};

module.exports = LinkedList;