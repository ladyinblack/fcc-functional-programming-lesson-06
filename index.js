// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Refactor Global Variables Out of Functions</h1>`;

/** TODO:
 * Rewrite the code so the global array bookList is not changed inside either function.  The add function should add the given bookName to the end of the array passed to it and return a new array (list).  The remove function should remove the given bookName from the array passed to it.
 * NOTE: Both functions should return an array, and any new parameters should be added before the bookName parameter.
 * 
 // The global variable 
 const bookList = ["The Hound of Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
 
 // Change code below this line 
 function add(bookName) {
 
   bookList.push(bookName);
   return bookList;
 
   // Change code above this line 
 }
 
 // Change code below this line
 function remove(bookName) {
   const book_index = bookList.indexOf(bookName);
   if (book_index >= 0) {
 
     bookList.splice(book_index, 1);
     return bookList;
     
     // Change code above this line
   }
 }
 */

// The global variable
const bookList = [
  'The Hound of Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

// Change code below this line
function add(bookList, bookName) {
  let newBookList = bookList.slice();
  newBookList.push(bookName);
  console.log('newBookList:', newBookList);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let newBookList = bookList.slice();
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
  }
}

console.log('Initial:', bookList);
add(bookList, 'A Brief History of Time');
console.log('After Add:', bookList);
remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log('After Remove:', bookList);
remove(
  add(bookList, 'A Brief History of Time'),
  'On The Electrodynamics of Moving Bodies'
);
console.log('After Add and Remove:', bookList);
