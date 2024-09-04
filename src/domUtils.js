export default function cacheDOM() {
  const addBookBtn = document.querySelector("#add-book-btn");
  const newBookDialog = document.querySelector("#new-book-dialog");
  const newBookForm = newBookDialog.querySelector("#new-book-form");
  const inputs = newBookForm.querySelectorAll("input");
  const cancelBtn = document.querySelector("#cancel-btn");

  let books = document.querySelector(".books");

  return { addBookBtn, newBookDialog, newBookForm, inputs, cancelBtn, books };
}
