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

    lengthOfTrain() {
        let trainCartInspector = this.locomotive;
        let sumOfTrainCarts = 0;

        while(trainCartInspector !== null) {
            sumOfTrainCarts++;

            if(trainCartInspector.nextTrainCart === null) {
                break;
            }
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        return sumOfTrainCarts;
    }

    doesTrainContainNodeTrainCart(trainCartValue) {
        let trainCartInspector = this.locomotive;
        let didTheInspectorFindTheTrainCartValue = false;
        while (trainCartInspector !== null) {
            if (trainCartInspector.trainCart === trainCartValue) {
                didTheInspectorFindTheTrainCartValue = true;
                break;
            }
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        return didTheInspectorFindTheTrainCartValue;
    }
}

const newlinkedList = new LinkedList;
newlinkedList.addCartToFront("1");
newlinkedList.addCartToFront("2");
newlinkedList.addCartToFront("3");
newlinkedList.addCartToFront("4");
newlinkedList.RemoveFront();
//console.log(newlinkedList.displayLocomotiveTrainCartAtFront());
//console.log(newlinkedList.doesTrainContainNodeTrainCart("4"));
console.log(newlinkedList.lengthOfTrain());