// Arrays in Javascript
let array = [20]; // Declaration of array 

array.push(2);
array.push(8);
array.push(7);
array.push(1);
array.push(9);
console.log(array);

array.pop() // Array.pop() removes the last element from the array
console.log(array);

array.sort((a,b)=> {return a-b}); // Sorts the array in ascending order with custom function
console.log(array);
array.reverse(); // Reverses the array elements
console.log(array);

array.shift(); // Removes the first element from the array
console.log(array);

array.unshift(10); // Adds the element at the beginning of the array
console.log(array);

array.forEach(element => {
    console.log(element); // Prints each element of the array
});

array.splice(2, 1); // remove the element at index 2 starting from index 0
console.log(array);

// ---------------------------------------------------------------------------------------------------------------------------------------
//  Linked List in Javascript
//  Do not worth it in Javascript but still

class LinkedList { //Similar to C language where we can create a node with data and next pointer in a structure called struct Node
    constructor(head = null){
        this.head = head;
    }

    size() { // returns the size of the linked list
        let count = 0; 
        let node = this.head;
        while (node) { // while node is not null or undefined
            count++;
            node = node.next
        }
        return count;
    }

    clear() { // clears the linked list by setting the head to null and unlike C language we do not have to free the memory
        this.head = null;
    }

    getLast() { // returns the last node of the linked list
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) { // the main idea is to traverse the linked list till the last node avoiding using next.next
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() { // returns the first node of the linked list
        return this.head;
    }

    getAt(index) { // returns the node at the given index
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
}

class Node { // this creates a struts structure with data and next pointer
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;  // node1.next is the pointer to the next node which is node2

let list = new LinkedList(node1); // list.head is the pointer to the first node which is node1
console.log(list.head.next.data); // prints 2

let node3 = new Node(3);
node2.next = node3;
console.log(list.head.next.next.data); // prints 3 - we can traverse the linked list using the next pointer
console.log(list.head.next.next.next); // prints null - as there is no node after node3
console.log(list.getFirst().data); // prints 1
console.log(list.getLast().data); // prints 3

