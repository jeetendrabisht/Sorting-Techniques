/**
 * This function uses merge sort algorithm, is divide and conqueror algorithm where
 * @function mergeSort
 * @param {Array Object} array
 * @returns {Array Object} array
*/
let mergeSort = array => {
    const arrayLength = array.length;
    if(arrayLength < 2) return array;
    const midValue = Math.floor(arrayLength/2);
    const leftArray = array.slice(0, midValue);
    const rightArray = array.slice(midValue, arrayLength);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

/**
 * This function is used to create new array which consist of sorted data 
 * which we get on the basis of letfArray and rightArray values comparison 
 * @function mergeSort
 * @param {Array Object} leftArray
 * @param {Array Object} rigthArray
 * @returns {Array Object} array
*/
let merge = (leftArray, rightArray) => {
    let array = [];
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            array.push(leftArray.shift());
        } else {
            array.push(rightArray.shift());
        }
    }
    while(leftArray.length) array.push(leftArray.shift());
    while(rightArray.length) array.push(rightArray.shift());
    return array;
}
console.log(mergeSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(mergeSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(mergeSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]