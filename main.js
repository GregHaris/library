"use strict";

const addBookBtn = document.querySelector("#add-book-btn");
const newBookDialog = document.querySelector("#new-book-dialog");
const newBookForm = document.querySelector("#new-book-form");
const cancelBtn = document.querySelector("#cancel-btn");
let books = document.querySelector(".books");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to toggle the read status of a book
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};


function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Function to display books as individual cards
// Function to display books as individual cards
function displayBooks() {
  books.innerHTML = ""; // Clear previous content

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.index = index; // Assign the index as a data attribute

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement("p");
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeBookFromLibrary(index);
    });

    const toggleSwitch = document.createElement("label");
    toggleSwitch.classList.add("toggle-switch");

    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.checked = book.read;
    toggleInput.addEventListener("change", () => {
      toggleReadStatus(index);
    });

    const slider = document.createElement("span");
    slider.classList.add("slider");

    toggleSwitch.appendChild(toggleInput);
    toggleSwitch.appendChild(slider);

    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("book-actions");
    actionsContainer.appendChild(removeBtn);
    actionsContainer.appendChild(toggleSwitch);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(actionsContainer);

    books.appendChild(card);
  });
}


// Function to remove a book from the library
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks();
}


// Event listener for the "Add Book" button
addBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

// Event listener for the form submission
newBookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  newBookDialog.close();
  newBookForm.reset();
});

// Event listener for the "Cancel" button
cancelBtn.addEventListener("click", () => {
  newBookDialog.close();
  newBookForm.reset();
});

// Call the displayBooks function to show the books
displayBooks();

