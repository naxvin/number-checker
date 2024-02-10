function calculateSquareRoot()
{
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('root');
    const inputValue = inputElement.value;

    if (!isNaN(inputValue))
    {
      const number = parseFloat(inputValue);
      const squareRoot = Math.sqrt(number);
      resultElement.textContent = `${squareRoot.toFixed(2)}.`;
    }
    else
    {
      resultElement.textContent = 'Please enter a valid number.';
    }
}
function isPalindrome(str)
{
   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   const reversedStr = str.split('').reverse().join('');
   return str === reversedStr;
}
function checkPalindrome()
{
  const inputElement = document.getElementById('input');
  const resultElement = document.getElementById('root');
  const inputString = inputElement.value;

  if (isPalindrome(inputString)) {
    resultElement.textContent = `"${inputString}" is a palindrome.`;
  } else {
    resultElement.textContent = `"${inputString}" is not a palindrome.`;
  }
}
function checkOddOrEven()
{
     const inputElement = document.getElementById('input');
     const resultElement = document.getElementById('root');
     const inputValue = inputElement.value;
   if (!isNaN(inputValue)) {
     const number = parseInt(inputValue);

     if (number % 2 === 0) {
       resultElement.textContent = `${number} is even.`;
     } else {
       resultElement.textContent = `${number} is odd.`;
     }
   } else {
     resultElement.textContent = 'Please enter a valid number.';
   }
}
function calculateFactorial()
{
   const inputElement = document.getElementById('input');
   const resultElement = document.getElementById('root');
   const inputValue = inputElement.value;
if (!isNaN(inputValue)) {
const number = parseInt(inputValue);
if (number >= 0) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  resultElement.textContent = `${factorial}.`;
} else {
  resultElement.textContent = 'Please enter a non-negative integer.';
}
} else {
resultElement.textContent = 'Please enter a valid number.';
}
}
function generateFibonacci() {
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('root');
const inputValue = inputElement.value;
if (!isNaN(inputValue)) {
const terms = parseInt(inputValue);
if (terms > 0) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }
  resultElement.textContent = `${fibonacciSequence.join(', ')}`;
} else {
  resultElement.textContent = 'Please enter a positive integer.';
}
} else {
resultElement.textContent = 'Please enter a valid number.';
}
}
 
function isPrime(number) {
if (number <= 1) return false;
if (number <= 3) return true;

if (number % 2 === 0 || number % 3 === 0) return false;

for (let i = 5; i * i <= number; i += 6) {
if (number % i === 0 || number % (i + 2) === 0) return false;
}

return true;
}
function checkPrimeOrComposite() {
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('root');
const inputValue = inputElement.value;
if (!isNaN(inputValue)) {
const number = parseInt(inputValue);
if (isPrime(number)) {
  resultElement.textContent = `${number} is a prime number.`;
} else {
  resultElement.textContent = `${number} is a composite number.`;
}
} else {
resultElement.textContent = 'Please enter a valid number.';
}
}