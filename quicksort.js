/**
 * function to return sort array using one of the divide and conqueror algorithm
 * Quick Sort.
 * We have to choose any pivot element thorugh this we keep value less than to left side and greater than to right side 
 * Using recursion will follow this until sorted
 * @function quickSort
 * @param {Array Object} array
 * @returns {Array Object} array
*/
let quickSort = array => {
    const arrayLength = array.length;
    const pivotElement = array[array.length - 1];
    const leftArray = [], rightArray = [];
    if(arrayLength < 2) return array;
    for(let i = 0; i < arrayLength - 1; i++) {
        array[i] < pivotElement ? leftArray.push(array[i]) : rightArray.push(array[i]);
    }
    return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
}

console.log(quickSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(quickSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(quickSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]