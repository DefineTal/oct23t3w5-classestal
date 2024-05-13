// Import Libary class, Book Class, Audiobook class, Games Cclass, Movies Class, Music class

const { Book } = require("./Book");
const { Libary } = require("./Libary");
const { Media } = require("./Media");

// Create instances of classes

let lotr = new Book("fellowship of the ring", "fancy");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Lord of the Rings as a instance of Book class
// Class is blueprint
// Instance is thing we build based on blueprint
// verb is instantiate

// Do things with those instances

// Create an instance of a Libary
// add media instances into the libary instance
let libaryInstance = new Libary();
libaryInstance.books.push(lotr);
// Log the data in the libary
console.log(libaryInstance);

console.log(libaryInstance.books[0].name);

let lotr2 = new Book("the twin towers", "fancy");

console.log(libaryInstance.books.length);
console.log(Book.count);
lotr2 = null;
Book.removeBook();
console.log(Book.count);

console.log(libaryInstance.books[0].getBookName());
