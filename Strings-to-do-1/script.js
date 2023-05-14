//Remove Blanks

const removeBlanks = (string) => {
    let noBlanksString = '';
    for(let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            continue;
        } else {
            noBlanksString+=string[i];
        }
    }
    return noBlanksString;
}
console.log(removeBlanks(" asdfa asd fdf awefa r e m o v e b l a n k s"));

//Get digits 
const getDigits = (string) => {
    let numberString = '';
    for (let i = 0; i < string.length; i++) {
        let determining = Number(string[i]);
        if (isNaN(determining)) {
            continue;
        } else {
            numberString+=string[i];
        }
    }
    return numberString;
}
console.log(getDigits('123asdf12asdf452'));

//Acronyms
const acronyms = (String) => {
    
    let acronym = '';
    acronym+=String[0].toUpperCase();
    for (let i = 0; i < String.length; i++) {
        if(String[i] === ' ') {
            acronym+=String[i+1].toUpperCase();
        } else {
            continue;
        }
    }
    return acronym;
}
console.log(acronyms('hello goodbye'));

//Count Non-spaces
const countNonSpaces = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== ' ') {
            count++;
        } else {
            continue;
        }
    }
    return count;
}
console.log(countNonSpaces('adsf asdf asdf asdf asdf asdf'));

//Remove Shorter Strings
const removeShorterStrings = (arrayOfStrings, minimumStringLength) => {
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length >= minimumStringLength) {
            newArray[newArray.length] = arrayOfStrings[i];
        } else {
            continue;
        }
    }
    return newArray;
}
console.log(removeShorterStrings(['hello', 'Bill', 'Joe', 'Jump', 'fly', 'be'], 4));