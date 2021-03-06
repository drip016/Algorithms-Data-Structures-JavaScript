//SLL is a one-directional data structure, which means it consists of nodes with no indexes, but only of its value and a pointer to the next value.



class Node { //We define our node's value and next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { // SLL push method for adding new nodes.
        let newNode = new Node(val); // Firstly we declare it.
        if (!this.head) { // If there's no head, new node is both head and tail.
            this.head = newNode;
            this.tail = this.head;
        } else { // If there is a head, we change the initial tail's next value to new node. And also we set the new tail.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // We increase the length by 1 each time and return the list.
        return this;
    }
    pop() { // Pop method of the linked list, removes the last node from the list.
        let current = this.head; // We use 2 values; 
        let newTail = current;
        while (current.next) { //Current will go ahead of new tail as long as there is next, and be redeclared.
            newTail = current;
            current = current.next;
        }
        this.tail = newTail; // Once there is no next. we set our new tail, and next to null.
        this.tail.next = null;
        this.length--; // List length goes -1;
        if (this.length === 0) { // If length is 0, that means list is empty so head and tail are null;
            this.head = null;
            this.tail = null;
        }
        return current; // We return the popped value;
    }
    shift() { // Shift method removes one node from the start of the list.
        let removed = this.head; // Storing the current head into variable since we return it at the end.
        if (!removed) return undefined;
        this.head = removed.next; // Setting new head.
        this.length--; // Decrementing the length.
        if (this.length === 0) { // If length is 0, that means list is empty so head and tail are null;
            this.head = null;
            this.tail = null;
        }
        return removed;
    }
    unshift(val) { // This method adds one element at the start of the SLL.
        let newHead = new Node(val); // We declare the new value.
        let oldHead = this.head; // We store the current head in a variable.
        if (!this.head) { // If empty list, declare new node as both head and tail.
            this.head = newHead;
            this.tail = this.head;
        } else { // In other case, we set the new node's next item to be the OLD head node.
            newHead.next = oldHead;
            this.head = newHead; //And we set the head of the list as a new node.
        }
        this.length++; // Increase the length.

    }
    get(idx) { // This method returns the Node positioned at the input 'idx' value.
        if (idx < 0 || idx > this.length) return null; // If input idx is less than 0 or higher than length, return null.
        let counter = 0; // We use counter variable as our start which we will increase as long as it's lower than input idx.
        let tempNode = this.head; // We start from the head node.
        while (counter < idx) {
            tempNode = tempNode.next; // We re-declare the temporary Node each time we loop through the list until counter and idx are same value.
            counter++;
        }
        return tempNode; // Returning the corresponding node.
    }
    set(val, idx) { // This method updates the value of a node at the specific index in the list.
        let newValue = val;
        let updatedItem = this.get(idx); // We use our get method to return the current node at given index.
        if (!updatedItem) return false; // If we dont return any value, return false from the method.
        updatedItem.val = newValue; // If yes, we will update the node's value and return true;
        return true;
    }
    insert(val, idx) { // This method inserts a Node into the list, at any given index.
        if (idx < 0 || idx > this.length) return false; // We have 3 edge cases.
        if (idx === this.length) { //If index is same as length, we add the node at the end of the list.
            this.push(val);
            return true;
        }
        if (idx === 0) { // If index is 0, we reuse unshift method to put one Node at the beginning of the list.
            this.unshift(val);
            return true;
        }
        let newValue = new Node(val); // In any other case, we get access of the node before the input index, and the one after, so we can update their next values.
        let prevNode = this.get(idx - 1);
        let currNode = prevNode.next;
        newValue.next = currNode;
        prevNode.next = newValue;
        this.length++;
        return true; // At the end we increase length and return true.
    }
    remove(idx) { // This method removes any node at the given index.
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift(); // We make use of shift and pop methods if values are start or end of the list.
        if (idx === this.length - 1) return this.pop();
        let prev = this.get(idx - 1); // We first use the previous node.
        let removed = prev.next; // We are saving the removed Node so we can later return it.
        let newNext = removed.next; // This will be the new next value since we are removing one Node in between;
        prev.next = newNext; // Here we re-declare the new next to the previous node.
        this.length--; // Decreasing and returning the removed node.
        return removed;
    }
    reverse() { // This method reverses the SLL!. 
        let node = this.head; // We will firstly swap the head and the tail, and store the head first before redeclaring it in next line.
        this.head = this.tail;
        this.tail = node;
        let next; // We define next and previous variables. Previous is null  because our new tail's next value must be null.
        let previous = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next; // Each iteration, we set next to current node's next value.
            node.next = previous; // Then, we select the current nodes next value to previous.
            previous = node; // Now we re-declare the previous value to be the current node.
            node = next; // And we re-declare the node's value to be the current next value.
        } // And we loop until the end of the list.
        return this;
    }
}


let list = new SinglyLinkedList();
list.push(15)
list.push(17)
list.push(29)
list.push(4)
list.push(55)
    // console.log(list.insert('new value text', 4))
    // console.log(list.remove(1));
console.log(list.reverse());