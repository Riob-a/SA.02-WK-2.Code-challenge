//function to accept both numbers is created
function newArray(num1, num2) {
//empty array that will store the numbers	
	let result = [];

	for (let i = num1; i <= num2; i++){
		result.push(i);
	} 
	return result;				
}
//define the start and the end point
let result = newArray(-4, 7);

console.log(result);