const LinkedList = require('./LinkedList')

//populate our linkedlist
const  ll = LinkedList.fromValues(10,20,30,40,50)
ll.print()

//get element by index
console.log(ll.getByIndex(2).value)

// insert Element at an index
ll.insertAtIndex(2,60)

ll.print()

//remove element from head
ll.removeHead()
ll.print()

//remove element at given index
ll.removeAtIndex(3)

ll.print()