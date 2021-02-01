const findAuthorById = (authors, id) => {
  // use find method to match author id to id input
 return authors.find((writer) => writer.id == id);
}

const findBookById = (books, id) =>{
  // use find method to match book id to id input
  return books.find((book) => book.id === id);
}


function partitionBooksByBorrowedStatus(books){
  /*This function returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
The first array contains books that are not yet returned ... returned === false
The second array contains books that have been returned... returned === true
We can check for the return status by looking at the first transaction in the `borrows` array.*/
   // create empty array
   const returned = [];
   const nonReturned = [];
   //run for loop through Parameter
   for (let borrows in books){
     const list = books[borrows];
     //destructure borrowed array
     const [first] = list.borrows;
     if (first.returned === false){
       returned.push(list);
     }  else {
       nonReturned.push(list);
     }
   }
  return [returned, nonReturned]
}

const getBorrowersForBook = (book, accounts) => {
/*The getBorrowersForBook() function in public/src/books.js has two parameters, in the following order:
- A book object.
- An array of all accounts.
It should return an array of all the transactions from the book's borrows key. However, each transaction should include the related account information and the returned key.*/
   //run for loop through Parameter
   for(let id in book) {
    const statuses = book.borrows.filter((borrow) => accounts.find((account) => account.id === borrow.id && borrow.returned == true));
    const lists = statuses.map((status) => {
      let list = accounts.find((account) => account.id === status.id );   
      list.returned = status.returned;
      return list;
    })
    console.log(lists)
     return lists
   }
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
