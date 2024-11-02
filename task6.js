// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum of all even numbers
function sumOfEvenNumbers(numArray) {
    const sum = numArray.reduce((previousValue, current) => {
        if (current % 2 === 0) {
            return previousValue + current;
        } else {
            return previousValue;
        }
    }, 0);
    return sum;
}

const result = sumOfEvenNumbers(numbers);
console.log(result);

