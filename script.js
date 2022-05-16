const bookCheck = document.querySelector(".book");
const titleCheck = document.querySelector(".title");
const pagesCheck = document.querySelector(".pages");

const formCheck = document.querySelector(".validform");

// Function runs when user clicks the submit button

const submit = document.querySelector("#submit")
submit.addEventListener('click', addBookToLibrary)

let myLibrary = [];

function addBookToLibrary(e) {
    if (!formCheck.checkValidity()) return // checks if input isnt empty
    formCheck.reportValidity()             // alerts the user to fill out the input
    e.preventDefault()                     // prevents the form from submitting
    const book = document.querySelector(".book");   //
    const title = document.querySelector(".title"); // gets the value from user input
    const pages = document.querySelector(".pages"); //
    let library = {
        book: book.value,
        title: title.value,
        pages: pages.value
    }
    myLibrary.push(library);                // adds objects to library array
    addItem()
}

function addItem() {
    const last = myLibrary[myLibrary.length - 1]    // creates a row
    const createRow = document.createElement('div')
    createRow.classList.add('card-row')

    const addToCards = document.querySelector('#cards');
}

// // function book(title, author, pages, read) {
// //             this.title = title
// //             this.author = author
// //             this.pages = pages
// //             this.read = read
// //             this.info = function() {
// //                 return(title + " by " + author + ", " + pages + ", " + read)
// //             }
// //         }


// // const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 
// //                             '295 pages', 'not read yet');