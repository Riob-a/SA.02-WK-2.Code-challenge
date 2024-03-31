//The first function is initialised, and it checks whether the number is divisible by any number between 2 and the square root of the number.
function calculatePrimeNumber(int) {
	for (let i = 2; i <= Math.sqrt(int); i++) {
	  if (int % i === 0) {
		return false;
	  }
	}
//The function then determines whether the number is a prime number or not if it is it returns false,else it continues 
	return true;
  }
//A new function is created that loops for prime numbers between 2 and the parameter
function findPrimeNumbers(p) {
	const primeNumbers = [];

	for (let i = 2; i <= p; i++) {
	  if (calculatePrimeNumber(i)) {
//pushes the prime numbers referred to in calculatePrimeNumber  into the empty array(primeNumbers)        
		primeNumbers.push(i);
	  }
	}
	return primeNumbers;
  }
console.log(findPrimeNumbers(25))