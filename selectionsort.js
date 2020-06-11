/**
 * This function uses selection sort algorithm where 
 * we find min index value from an array and compare it with first item
 * Swap the values
 * This process goes excluding the first item ( because it's in correct position) each time during traverse of an array 
 * Two loops required
 * First :: for swapping 
 * Second :: for updating min index value
 * @function selectionSort
 * @param {Array Object} array
 * @returns {Array Object} array
*/
let selectionSort = array => {
    const arrayLength = array.length;
    for(let i = 0; i < arrayLength; i++) {
        let currentMinIndexValue = i;
        for( let j = i + 1; j < arrayLength; j++) {
            if(array[j] < array[currentMinIndexValue]) {
                currentMinIndexValue = j;
            }
        }
        let temp = array[i];
        array[i] = array[currentMinIndexValue];
        array[currentMinIndexValue] = temp;
    }
    return array;
}
console.log(selectionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(selectionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(selectionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]