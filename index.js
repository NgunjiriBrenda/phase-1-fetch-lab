function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  main.innerHTML = ""; // clear previous content

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Run fetchBooks when the DOM is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
