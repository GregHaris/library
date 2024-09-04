export default function cacheDOM() {
  const addBookBtn = document.querySelector("#add-book-btn");
  const newBookDialog = document.querySelector("#new-book-dialog");
  const newBookForm = document.querySelector("#new-book-form");
  const cancelBtn = document.querySelector("#cancel-btn");
  let books = document.querySelector(".books");

  return { addBookBtn, newBookDialog, newBookForm, cancelBtn, books };
}
