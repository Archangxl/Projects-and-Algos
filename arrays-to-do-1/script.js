//Push Front

const pushToFront = (array, value) => {
    for (let i = array.length; i > -1; i--) {
        array[i+1] = array[i];
    }
    array[0] = value;
    console.log(array);
}
console.log(pushToFront([1,2,3,4], 2));

//Pop Front

const popFront = (array) => {
    let arrayIndexZero = array[0];
    for(let i = 1; i < array.length; i++) {
        array[i-1] = array[i]; 
    }
    array.length = array.length - 1;
    console.log(array);
    return arrayIndexZero;
}
console.log(popFront([1,2,3,4]));

//Insert At

const insertAt = (array, inserAt, value) => {
    let arrayInsertAtValue = array[inserAt];
    for (let i = array.length -1; i > -1; i--){
        if (array[i] === array[inserAt]) {
            break;
        }
        array[i+1] = array[i];
    }
    array[inserAt] = value;
    array[inserAt+1] = arrayInsertAtValue;
    return array;
}
console.log(insertAt([1,2,3,4,-1,2,5,6,7,8], 7, 5));