/**
 * This function uses bubble sort algorithm where first value is compared with the second.
 * If second value is less than first , swap the values
 * If not, no swap required
 * Two loops we have to maintain
 * First Loop :: do while :: Using swapped flag to loop the array
 * Second Loop :: for loop ( Zero index - Less than array length) :: 
 * If condition is true, swap the values and update swapped flag value else swapped flag will be false 
 * @function bubbleSort
 * @param {Array Object} array
 * @returns {Array Object} array
*/
let bubbleSort = array => {
    // capture array length 
    const arrayLength = array.length;
    // flag to traverse the array
    let swapped;
    let forLoopRan = 0;
    do {
        // initially and if condition become false do while loop stops
        swapped = false;
        for(let i = 0 ; i < arrayLength - forLoopRan ; i++) {
            if( array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                // key element to traverse the array for sorting
                swapped = true;
            }
        }
        // check number of times the for loop ran in one loop of do while
        forLoopRan++;
    } while(swapped);
    return array;
}
console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(bubbleSort([6,5,4,3,2,1])); //[1, 2, 3, 4, 5, 6]

