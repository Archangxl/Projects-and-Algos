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

    displayAllTrainCarts() {
        let allTrains = '';

        if (this.locomotive === null) {
            return "This list is empty";
        } else if (this.locomotive.nextTrainCart === null) {
            allTrains += this.locomotive.trainCart;
            return allTrains;
        } else {
            allTrains += this.locomotive.trainCart;
            let trainCartInspector = this.locomotive.nextTrainCart;
            
            while(trainCartInspector !== null) {
                if (trainCartInspector.trainCart === null) {
                    break;
                } 
                allTrains += "," + trainCartInspector.trainCart;
                trainCartInspector = trainCartInspector.nextTrainCart;
            }
            return allTrains;
        }
    }

    maxTrainCart() {
        let maxTrainCart = this.locomotive.trainCart;
        let trainCartInspector = this.locomotive;
        while (trainCartInspector.nextTrainCart !== null) {
            if (maxTrainCart > trainCartInspector.nextTrainCart.trainCart) {
                trainCartInspector = trainCartInspector.nextTrainCart;
            } else {
                maxTrainCart = trainCartInspector.nextTrainCart.trainCart;
                trainCartInspector = trainCartInspector.nextTrainCart;
            }
        }
        return maxTrainCart;
    }

    smallestTrainCart() {
        let smallestTrainCart = this.locomotive.trainCart;
        let trainCartInspector = this.locomotive;
        while (trainCartInspector.nextTrainCart !== null) {
            if (smallestTrainCart < trainCartInspector.nextTrainCart.trainCart) {
                trainCartInspector = trainCartInspector.nextTrainCart;
            } else {
                smallestTrainCart = trainCartInspector.nextTrainCart.trainCart;
                trainCartInspector = trainCartInspector.nextTrainCart;
            }
        }
        return smallestTrainCart;
    }

    averageTrainCart() {
        let averageTrainCart = 0;
        let trainCartLength = 0;
        let trainCartInspector = this.locomotive;
        while(trainCartInspector !== null) {
            averageTrainCart+=trainCartInspector.trainCart;
            trainCartLength++;
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        return averageTrainCart / trainCartLength;
    }

    whatIsTheLastTrainCart() {
        let trainCartInspector = this.locomotive;

        while (trainCartInspector.nextTrainCart !== null) {
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        return trainCartInspector.trainCart;
    }

    removeTheLastTrainCart() {
        let trainCartInspector = this.locomotive;

        while (trainCartInspector.nextTrainCart.nextTrainCart !== null) {
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        trainCartInspector.nextTrainCart = null;
        return this;
    }

    addTrainCartToTheBack(value) {
        let trainCartInspector = this.locomotive;
        let newTrainCart = new Node();
        newTrainCart.trainCart = value;
        
        while(trainCartInspector.nextTrainCart !== null) {
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        trainCartInspector.nextTrainCart = newTrainCart;
        return this;
    } 

    moveMinimumTrainCartValueToTheFront() {
        let minimumTrainCart = this.smallestTrainCart();
        let trainCartInspector = this.locomotive;

        while (trainCartInspector.nextTrainCart.nextTrainCart !== null) {
            if (trainCartInspector.nextTrainCart.trainCart === minimumTrainCart) {
                trainCartInspector.nextTrainCart = trainCartInspector.nextTrainCart.nextTrainCart;
                continue;
            }
            trainCartInspector = trainCartInspector.nextTrainCart;
        }

        this.addCartToFront(minimumTrainCart);
        return this;
    }

    moveMaximumTrainCartValueToTheBack() {
        let maximumTrainCart = this.maxTrainCart();

        let trainCartInspector = this.locomotive;

        while (trainCartInspector.nextTrainCart.nextTrainCart !== null) {
            if (trainCartInspector.nextTrainCart.trainCart === maximumTrainCart) {
                trainCartInspector.nextTrainCart = trainCartInspector.nextTrainCart.nextTrainCart;
                continue;
            }
            trainCartInspector = trainCartInspector.nextTrainCart;
        }
        this.addTrainCartToTheBack(maximumTrainCart);
        return this;
    }
}

const newlinkedList = new LinkedList;
newlinkedList.addCartToFront(7);
newlinkedList.addCartToFront(1);
newlinkedList.addCartToFront(10);
newlinkedList.addCartToFront(2);
newlinkedList.addCartToFront(3);
newlinkedList.addCartToFront(4);
//newlinkedList.RemoveFront();
//console.log(newlinkedList.displayLocomotiveTrainCartAtFront());
//console.log(newlinkedList.doesTrainContainNodeTrainCart("4"));
//console.log(newlinkedList.lengthOfTrain());
//console.log(newlinkedList.displayAllTrainCarts());
//console.log(newlinkedList.maxTrainCart());
//console.log(newlinkedList.smallestTrainCart());
//console.log(newlinkedList.averageTrainCart());
//console.log(newlinkedList.whatIsTheLastTrainCart());
//console.log(newlinkedList.removeTheLastTrainCart().displayAllTrainCarts());
//console.log(newlinkedList.addTrainCartToTheBack(1).displayAllTrainCarts());
//console.log(newlinkedList.moveMinimumTrainCartValueToTheFront().displayAllTrainCarts());
//console.log(newlinkedList.moveMaximumTrainCartValueToTheBack().displayAllTrainCarts());