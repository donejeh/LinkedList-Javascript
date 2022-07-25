"use strict";

var LinkedList = require('../LinkedList');

describe('#insertAtHead', function () {
  test('it adds the element to the beginning of the list', function () {
    var ll = new LinkedList();
    ll.insertAtHead(10);
    var oldHead = ll.head;
    ll.insertAtHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});
describe('#getByIndex', function () {
  describe('with index less than 0 ', function () {
    test('it should return null', function () {
      var ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe('with index great than length ', function () {
    test('it should return null', function () {
      var ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });
  describe('with index 0 ', function () {
    test('it should return head', function () {
      var ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
  describe('with index in the middle ', function () {
    test('it should return the element at that index', function () {
      var ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});
describe('#insertAtIndex', function () {
  describe('with index less than 0 ', function () {
    test('it does not insert anything', function () {
      var ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index great than length ', function () {
    test('it does not insert anything', function () {
      var ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index 0 ', function () {
    test('insert at the head', function () {
      var ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });
  describe('with index in the middle ', function () {
    test('insert at the given index', function () {
      var ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      var node = ll.getByIndex(2);
      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});
describe('#removeHead', function () {
  test('remove element from head', function () {
    var ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead(10);
    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});
describe('#removeAtIndex', function () {
  describe('with index less than 0 ', function () {
    test('it does not remove anything', function () {
      var ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index great than length ', function () {
    test('it does not remove anything', function () {
      var ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(5);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index 0 ', function () {
    test('remove the head', function () {
      var ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index in the middle ', function () {
    test('insert at the given index', function () {
      var ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      var node = ll.getByIndex(1);
      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});