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
    const last = myLibrary[myLibrary.length - 1]    // selects the last library item
    const createRow = document.createElement('div') // creates a row
    createRow.classList.add('card-row')

    const addToCards = document.querySelector('#cards');

    for (let key in last) {
        const displayBook = document.createElement("div")
        displayBook.classList.add('card')
        displayBook.innerText = last[key]
        createRow.append(displayBook)
    }
    addToCards.appendChild(createRow)

    const button = document.createElement("button"); // create and add delete button element
    button.classList.add("button")                   // and append it to newly created row
    button.classList.add("delete")
    button.innerText = "Delete"
    createRow.appendChild(button);

    button.addEventListener('click', function() {
        console.log(this);
        this.parentNode.remove()
    })

    const state = document.createElement("button");
    state.classList.add("state")
    state.classList.add("read")
    state.innerText = "Not Read"
    createRow.appendChild(state);

    state.addEventListener('click', function() {
        console.log(this);
        this.classList.toggle("read")
        if (state.innerText === "Not Read") {
            state.innerText = "Read";
        } else {
            state.innerText = "Not Read";
        }
    })
}