class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
    }
    removeFront() {
        if(!this.head) {
            return null;
        }
        else {
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            return this;
        }
    }
    front() {
        if(!this.head) {
            return null;
        }
        else {
            return this.head.data;
        }
    }
}
let SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());
console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());

