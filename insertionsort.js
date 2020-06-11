/**
 * This function uses insertion sort algorithm where 
 * we insert item by swap it with cuurent value
 * @function insertionSort
 * @param {Array Object} array
 * @returns {Array Object} array
*/
let insertionSort = array => {
    const arrayLength = array.length;
    for(let i = 1; i < arrayLength; i++ ) {
        let currentValue = array[i];
        let j = i - 1;
        while( j >= 0 && array[j] > currentValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentValue;
    }
    return array;
}
console.log(insertionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(insertionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(insertionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]