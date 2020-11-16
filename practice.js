// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
// [5,2,3,4]
 // 5 - INFINITY
// lowest = 5 IS 5 LOWER THAN INFINITY
// 5 
// 2

//let lowest = null;
/*
function getLowestScore(submissions) {
    let lowest = null;
  
    submissions.forEach(function (submission) {
      if (lowest === null || lowest.score > submission.score) {
        lowest = submission;
      }
    });
  
    return lowest;
  }
  */

const animal = {
    name: "BJ",
    pockets: [200, 'hammer', 'book', {name: "T-rex", type: 'fossil'}], //can mix any data type in array but it always starts at 0
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  };

  console.log('POCKETS BEFORE', animal.pockets);
  const notebook = 'Leather Notebook';
  animal.pockets.splice(3);
  console.log('POCKETS AFTER', animal.pockets); 