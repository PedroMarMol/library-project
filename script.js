const bookCheck = document.querySelector(".book");
const titleCheck = document.querySelector(".title");
const pagesCheck = document.querySelector(".pages");

const formCheck = document.querySelector(".validform");

// Function runs when user clicks the submit button

const submit = document.querySelector("#submit")
submit.addEventListener('click', addBookToLibrary)



// let myLibrary = [];

// // function book(title, author, pages, read) {
// //             this.title = title
// //             this.author = author
// //             this.pages = pages
// //             this.read = read
// //             this.info = function() {
// //                 return(title + " by " + author + ", " + pages + ", " + read)
// //             }
// //         }

// // function addBookToLibrary() {
// //     myLibrary.push();
// // }

// // const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 
// //                             '295 pages', 'not read yet');