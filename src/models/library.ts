import Book from './book';

class Library {
    private collection: Book[] = [];

    addBook(book: Book): void {
        this.collection.push(book);
    }

    registerLoan(code: number): void {
        const book = this.collection.find(b => b.code === code);
        if (book && book.available) {
            book.available = false;
            console.log(`Loan made for the book: ${book.title}`);
        } else {
            console.log("Book not available for loan or not found.");
        }
    }

    checkAvailability(code: number): boolean {
        const book = this.collection.find(b => b.code === code);
        if (book) return book.available;
        else {
            console.log("Book not found.");
            return false;
        }
    }
}
export default Library;
