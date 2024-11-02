
const people = [
    { name: "Siyam", age: 25, gender: "male" },
    { name: "Ayesha", age: 30, gender: "female" },
    { name: "Ben", age: 20, gender: "male" },
    { name: "Hiya", age: 28, gender: "female" },
];

function getMaleNames(peopleArray) {
    const males = peopleArray.filter(person => person.gender === "male");
    const maleNames = males.map(person => person.name);
    return maleNames;
}

const result = getMaleNames(people);
console.log(result);