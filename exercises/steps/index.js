// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//pseudo code:
    // From 0 to n (iterate through rows)
        // Create and empty String, "stair"
        // From 0 to n (iterate through columns)
            //IF the current column is equal to or less than the current row
                //Add a "#" to "stair"
            //ELSE
                //Add a space to "stair"
        //Console log "stair"

// function steps(n) {
//     for (let row = 0; row < n; row ++){
//         let stair = "";
        
//         for (let column = 0; column < n; column++){
//             if (column <=row){
//                 stair += "#";
//             }
//             else {
//                 stair += " ";
//             }
//         }
//         console.log(stair);
//     }
// }

//recursive solution

function steps(n, row = 0, stair = '') {
    if ( row === n) {
        return;
    } 

    if (n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    steps(n, row, stair);
}

module.exports = steps;
