//The text to be changed is entered
const string = 'This Is a Test To Change Case In a String';
//A function that contains the case changing code is created
function caseChanger(){
const answer = string.split('').map(function(change){
  return change === change.toUpperCase()
  ? change.toLowerCase()
  : change.toUpperCase()
}).join('')
return answer
}
//console.log to return the changed string
console.log(caseChanger())