const findAccountById = (accounts, id) => {
  //It returns the account object that has the matching ID.
  return accounts.find((account) => account.id === id);
}

const sortAccountsByLastName = (accounts) =>{
  //It returns a sorted array of objects. The objects are sorted alphabetically by last name.
 return accounts.sort((account1, account2) => account1.name.last.toUpperCase() > account2.name.last.toUpperCase() ? 1:-1 );
}

const numberOfBorrows = (account, books) => {
  //It returns a _number_ that represents the number of times the account's ID has appeared in a book's `borrow` array.
  let accumulator = 0; 
  const total = books.reduce((acc, book) => {
    return book.borrows.find((borrow) => borrow.id === account.id) ? acc +1: acc+0
  }, accumulator); 
  return total;
}

const getBooksPossessedByAccount = (account, books, authors) => {
  //It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.
  //books that arent checked out goes here.
  let checkedOutBooks = books.filter((book)=> book.borrows.find((borrow)=> (borrow.returned === false && borrow.id === account.id)))
  let checkedOutBooksWithAuthors = checkedOutBooks.map((book) =>{
    //code to find the author by ID
    let author = authors.find((writer) => writer.id === book.authorId);
    book.author = author;
    return book;
  });
  return checkedOutBooksWithAuthors;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
