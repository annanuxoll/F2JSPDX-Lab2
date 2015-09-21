//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

/* PART 1 */

function getLastLetter(s) {
  return s.slice(-1);
}

assert(getLastLetter("hello") === "o", "getLastLetter is not getting the last letter")

function lastLetterSort(stringArray){
   stringArray.sort(function(a, b){
     return (getLastLetter(a) - getLastLetter(b));
   });
}

assertDeepEqual(
  lastLetterSort( [ 'blue', 'red', 'green' ] ),
  [ 'red', 'blue', 'green' ],
  'array not sorted by last letter'
);


/* PART 2 */

var arrayOfArrays = [ [ 1, 4, 3 ], [ 6, 2, 3 ], [ 3, 9 ], [ 0, 1 ] ];

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(entry){
  sum += entry
  });
  return sum;
}


function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
  });
}

// 2 assertions that test the above code
assert(sumArray(arrayOfArrays[0]) < sumArray(arrayOfArrays[1]), 
  "arrays not sorted by sum");

assert(sumArray([1, 2, 3]) === 6, "sumArray is not summing elements correctly");

// assert methods //

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

// Use this method to test two arrays when they are not
// the same arrays but content should be equal
function assertDeepEqual(actual, expected, failureMessage) {
  try {
    if ( JSON.stringify(actual) !== JSON.stringify(expected) ) {
      throw new Error( failureMessage );
    }
  }
  catch (err) {
    console.log('assertion failure: ', err,
                '\nexpected:', expected,
                '\nactual:', actual);
  }
}

