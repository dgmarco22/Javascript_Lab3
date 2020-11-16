// 1. Declare a variable named submissions that is initialized to an array with the following
//    objects:
const submissions = [
    { name: 'JANE', score: 95, date: '2020-01-24', passed: true,},
    { name: 'JOE', score: 77, date: '2018-05-14 ', passed: true,},
    { name: 'JACK', score: 59, date: '2019-07-05', passed: false,},
    { name: 'JILL', score: 88, date: '2020-04-22', passed: true,},
]
console.log(submissions);

// 2. Declare a function named addSubmission
//    Parameter(s): array, newName, newScore, newDate

function addSubmission(array, newName, newScore, newDate) {

    // Functionality: construct an object and push it into the array. The object must
    // have the same properties as the objects already in the array. 
    // Use conditional statements to set the value for the passed property to true if the score is
    // greater than or equal to 60 and false otherwise.

    let newPassed;
    if (newScore >= 60){
        newPassed = true;
     }
     else {
        newPassed = false;
     };

    const newobject = {name: newName, score: newScore, date: newDate, passed: newPassed};
    array.push(newobject);
    
}
addSubmission(submissions,'BOB', 59, '2020-11-11');
console.log('After Push', submissions);

// 3. Declare a function named deleteSubmissionByIndex
//    Parameter(s): array, index
//    Functionality: remove the object from the array at the specified index using the
//    splice method.

  function deleteSubmissionByIndex(array, index){
      
      submissions.splice(index,1);
      console.log('Submission after object removed', submissions);
   }
   
    deleteSubmissionByIndex(submissions, 2);


// 4. Declare a function named deleteSubmissionByName
//    ○ Parameter(s): array, name
//    ○ Functionality: remove the object from the array that has the provided name.
//    Incorporate the findIndex method and the splice method.

function deleteSubmissionByName(array, name){
   
    let index = array.findIndex(array => array.name === name);
   // console.log(index);
    array.splice(index,1);
    
   }   
    deleteSubmissionByName(submissions,'JANE');
    console.log('Submission after', submissions);  


//5. Declare a function named editSubmission
//  ○ Parameter(s): array, index, score
//  ○ Functionality: update an object’s score in the array at the specified index. Use
//  conditional statements to set the value for the passed property to true if the
//  score is greater than or equal to 60 and false otherwise.  

function editSubmission(array,index,score){
 
  let passed;
  if (score >= 60){
      passed = true;
   }
   else {
      passed = false;
   };

   array[index].score= score;
   array[index].passed=passed;
}
    editSubmission(submissions,1, 50);
    console.log('Edited Submissions', submissions);  



// 6. Declare a function named findSubmissionByName
//  ○ Parameter(s): array, name
//  ○ Functionality: return the object in the array that has the provided name. Use the
//    find method.

function findSubmissionByName(array,name){
  let objectName = array.find((array)=> array.name===name);
  console.log('Submission Name', objectName);
}
findSubmissionByName(submissions, 'JILL');



//7. Declare a function named findLowestScore
//   ○ Parameter(s): array
//   ○ Functionality: return the object in the array that has the lowest score. Use the
//     forEach method to loop through the whole array.
function findLowestScore(array)
{
     let lowestScore = array[0].score;
     array.forEach(function (object)
      {
       if( object.score <lowestScore)
       {
         lowestScore = object.score;
       }
      });
     console.log('Lowest Score:',lowestScore);
}
findLowestScore(submissions);


//8. Declare a function named findAverageScore
//  ○ Parameter(s): array
//  ○ Functionality: return the average quiz score. Use a for...of loop.

function findAverageScore(array){
  let totalScore =0;
  for (let student of array){
    totalScore= totalScore +student.score;
  }
 let averageScore = totalScore/ array.length;
 console.log('AvgScore:',averageScore);
}
findAverageScore(submissions);


//9. Declare a function named filterPassing
//   ○ Parameter(s): array
//   ○ Functionality: return a new array using the filter method. The filter method
//     should find objects in the array that have passing scores.

function filterPassing(array){
 
    let result = array.filter((array)=> array.passed ===true);
    console.log('Passing Scores:',result);
  
}
 filterPassing(submissions);
 


//10. Declare a function named filter90AndAbove
//      ○ Parameter(s): array
//      ○ Functionality: return a new array using the filter method. The filter method
//      should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array){
  let result = array.filter((array)=> array.score >=90);
  console.log('Scores greater than 90:',result);
}
 filter90AndAbove(submissions);
