// Array of numbers with duplicates
const numbers = [1,1,2, 5, 6, 5,7, 7,7];

// Function to get unique values
function getUniqueValues(numArray) {
    let uniqueValues = [];
    numbers.forEach(value => {
        if(!uniqueValues.includes(value)){
            uniqueValues.push(value)
        }return
    })
    return uniqueValues;
}

const result = getUniqueValues(numbers);
console.log(result);
