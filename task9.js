
const numbers = [3, 20, 2, 9,96];

function findMaxValue(numArray) {
    const max = numArray.reduce((previousValue, current) => {
        return current > previousValue ? current : previousValue;
    });
    return max;
}

const result = findMaxValue(numbers);
console.log(result); 
