import Book from './models/book';
import Library from './models/library';

function registerBooks(library: Library) {
    const book1 = new Book(1, "Don Quixote", "Miguel de Cervantes");
    const book2 = new Book(2, "1984", "George Orwell");
    const book3 = new Book(3, "The Lord of the Rings", "J.R.R. Tolkien");

    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    console.log("Books registered in the collection.");
}

// Function to register a loan
function makeLoan(library: Library, code: number) {
    library.registerLoan(code);
}

// Function to check the availability of a book
function checkAvailability(library: Library, code: number) {
    const available = library.checkAvailability(code);
    console.log(`The book with code ${code} is ${available ? "available" : "unavailable"}.`);
}

const library = new Library();
registerBooks(library);
makeLoan(library, 1);
checkAvailability(library, 1);
checkAvailability(library, 2);