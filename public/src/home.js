  function calculate (books) {
  //It returns a number that represents the number of objects inside of the array.
  let accumulator = 0; 
  let total = books.reduce((acc, book) => {return book == [] ? acc +0: acc +1}, accumulator);
  return total;
  }  
  
const totalBooksCount = (books) => {
  //It returns a number that represents the number of book objects inside of the array.    
 return  calculate (books);
  
}

const totalAccountsCount = (accounts) => {
  //It returns a number that represents the number of account objects inside of the array.
  return calculate (accounts);
}

const booksBorrowedCount= (books) => {
  //It returns a number that represents the number of books _that have been taken out from the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.
  let accumulator = 0;   
   //run for loop through Parameter
  for (let borrows in books){
   const list = books[borrows];
   //destructure borrowed array
   const [first] = list.borrows;
   if (first.returned) {
     accumulator;
   } else{
     accumulator ++; 
   }
  }
   return accumulator;
}

const getMostCommonGenres= (books) => {
/*It returns an array containing five objects or less that represents the most common occurring genres, ordered from most common to least.
Each object in the returned array has two keys:
The name key which represents the name of the genre.
The count key which represents the number of times the genre occurs.*/
  
  const genres = books.reduce((acc, book) => {
    (acc[book.genre]) ? acc[book.genre]++ : acc[book.genre] = 1;
     return acc
      }, {}); 
  let keys = Object.keys(genres);
  let keysSorted = keys.sort((keyA, keyB) => genres[keyB] - genres[keyA]);
  let finalArray = keysSorted.map((key) =>{ return {name: key, count: genres[key]}});
  return finalArray.slice(0,5);
}

const getMostPopularBooks = (books) => {
/*The mostPopularBooks() function has a single parameter:
An array of books.
It returns an array containing five objects or less that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
Each object in the returned array has two keys:
  The name key which represents the title of the book.
  The count key which represents the number of times the book has been borrowed.
If more than five books are present, only the top five should be returned.*/    
    
  
  const titles = books.reduce((acc, book) => {
    (acc[book.title]) ? acc[book.title]++ : acc[book.title] = book.borrows.length;
     return acc
      }, {}); 
  let keys = Object.keys(titles);
  let keysSorted = keys.sort((keyA, keyB) => titles[keyB] - titles[keyA]);
  let finalArray = keysSorted.map((key) =>{ return {name: key, count: titles[key]}});
  return finalArray.slice(0,5);
  
  }

const getMostPopularAuthors = (books, authors) => {
 /*The mostPopularAuthors() function has two parameters,An array of books & An array of authors.
It returns an array containing five objects or less that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
Each object in the returned array has two keys:
The name key which represents the first and last name of the author.
The count key which represents the number of times the author's books have been borrowed.
If more than five authors are present, only the top five should be returned.*/
  const writers = authors.reduce((acc, author) => {
    const matchingId = books.find(book => author.id === book.authorId);
    const authorName = author.name.first + " " + author.name.last;
    const nameCount = acc[author.name] ? acc[authorName]+1 : matchingId.borrows.length; 
    acc[authorName] = nameCount; 
    return acc;
  }, {}); 
  let keys = Object.keys(writers);
  let keysSorted = keys.sort((keyA, keyB) => writers[keyB] - writers[keyA]);
  let finalArray = keysSorted.map(key =>{ return {name: key, count: writers[key]}});
  return finalArray.slice(0,5); //  [{ name: "Tami Hurst", count: 83 }]
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
