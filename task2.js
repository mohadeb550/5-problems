// Array of book objects
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

function getBookTitles(bookArray) {
    const titles = bookArray.map(book => book.title);
    return titles;
}

const result = getBookTitles(books);
console.log(result)