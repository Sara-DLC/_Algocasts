// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
//while index is less than the length of the array
    while (index < array.length){
        //push the following into our empty chunked array
            //1st slice starting at the index (index will change over time)
            //second parameter will be the index we are at plus the size of our array
        chunked.push(array.slice(index, index + size));
        //add the index to our size
        index += size;
    }
    return chunked;
}


// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length-1];

//         if (!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

module.exports = chunk;
