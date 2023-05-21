class Node {
    constructor(trainCart) {
        this.trainCart = trainCart;
        this.nextTrainCart = null;
    }
}
class LinkedList {
    constructor() {
        this.locomotive = null;
    }

    addCartToFront(cart) {
        let newNode = new Node(cart);

        if (!this.locomotive) {
            this.locomotive = newNode;
            return this;
        }
        newNode.nextTrainCart = this.locomotive;
        this.locomotive = newNode;
        return this;
    }

    RemoveFront() {
        this.locomotive = this.locomotive.nextTrainCart;
        return this;
    }

    displayLocomotiveTrainCartAtFront() {
        if (!this.locomotive) {
            return null;
        }
        return this.locomotive.trainCart;
    }
}

const newlinkedList = new LinkedList;
newlinkedList.addCartToFront("1");
newlinkedList.addCartToFront("2");
newlinkedList.addCartToFront("3");
newlinkedList.RemoveFront();
console.log(newlinkedList.displayLocomotiveTrainCartAtFront());