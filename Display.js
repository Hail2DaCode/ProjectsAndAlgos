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
    display() {
        let runner = this.head
        let string = "";
        while(runner !== null) {
            //let temp = runner.data;
            let newString = String(runner.data);
            if(runner.next !== null) {
                string = string + newString + ",";
            }
            else {
                string = string + newString;
            }
            runner = runner.next;
        }
        console.log(typeof(string));
        return string;
    }
}
SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display());
SLL1.addFront(11.41);
console.log(SLL1.display());
