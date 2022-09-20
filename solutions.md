## ALTERNATE SOLUTIONS

### Solution 1:
```js
// the global variable
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName 

// Add your code below this line 
function add(arr, bookName) {
    let newArr = [...arr];          // Copy the bookList array to a new array.
    newArr.push(bookName);          // Add bookName parameter to the end of the new array.
    return newArr;              // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one 

// Add your code below this line 
function remove(arr, bookName) {
    let newArr = [...arr];          // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
        // Check whether the bookName parameter is in new array.
        newArr.splice(newArr.indexOf(bookName), 1);         // Remove the given parameter from the new array.
        return newArr;          // Return the new array.
    }
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```


### Solution 2:
```js
// the global variable 
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName 

function add(list, bookName) {
    return [...list, bookName];
}


/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one 

function remove(list, bookName) {
    return list.filter(book => book !== bookName);
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```
