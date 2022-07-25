class LinkedList{

    //
    constructor(){
        this.head = null
        this.length = 0
    }

    //insert from head
    insertAtHead(data){
        const newHead = new LinkedListNode(data,this.head)
        this.head = newHead
        this.length++
    }
    //search by index
   getByIndex(index){
        if(index <0 || index >= this.length) return null
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next;            
        }
        return current
    }

    //delete the element at head
    removeHead(){
        this.head = this.head.next
        this.length--
    }

    //remove element at index
    removeAtIndex(index){

        if (index ===0) return this.removeHead()
        const prev = this.getByIndex(index - 1)
        if(prev == null) return null
        prev.next = prev.next.next
        this.length--

    }
    insertAtIndex (index,value){
        if (index ===0) return this.insertAtHead(value)
        const prev = this.getByIndex(index - 1)
        if(prev == null) return null
        prev.next = new LinkedListNode(value,prev.next)
        this.length++
    }

    print(){
        let output =  ''
        let current = this.head

        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }

        console.log(`${output}null`)
    }
}

//node class
class LinkedListNode {

    constructor(value,next){
        this.value = value
        this.next = next
    }
}
//helper function for populating
LinkedList.fromValues = function(...value){
    const ll = new LinkedList

    //looping from behind to popular our linkedlist
    for (let i = value.length-1; i >=0 ; i--) {
         ll.insertAtHead(value[i])
        
    }

    return ll
}

module.exports = LinkedList