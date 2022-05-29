export * from "./books.js"

const bookForm = document.getElementById('bookForm');
const booksContainer = document.querySelector('.books');
const titleInput = bookForm.title;
const authorInput = bookForm.author;
const books = JSON.parse(localStorage.getItem('books')) || [];

class AwesomeBooks {
  addBook = (title, author) => {
    books.push({
      title,
      author,
    });

    localStorage.setItem('books', JSON.stringify(books));
    return {
      title,
      author,
    };
  }

  createBookElement = ({
    title,
    author,
  }) => {
    // Create elements

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    const bookOutput = document.createElement('p');
    const bookRemove = document.createElement('button');
    bookRemove.classList.add('book-remove');

    // Fill the content
    bookRemove.innerText = 'Remove';
    bookOutput.innerHTML = `"${title}" by ${author}`;

    bookRemove.onclick = function () {
      bookRemove.parentElement.remove();
      let myIndex;
      for (let i = 0; i < books.length; i += 1) {
        if (books[i].title === title && books[i].author === author) {
          myIndex = i;
        }
      }
      books.splice(myIndex, 1);
      localStorage.setItem('books', JSON.stringify(books));
    };

    // Add to the DOM
    bookDiv.append(bookOutput, bookRemove);
    booksContainer.appendChild(bookDiv);
  }
}

const myBooks = new AwesomeBooks();

books.forEach(myBooks.createBookElement);

bookForm.onsubmit = (e) => {
  e.preventDefault();

  const newBook = myBooks.addBook(titleInput.value, authorInput.value);

  myBooks.createBookElement(newBook);

  titleInput.value = '';
  authorInput.value = '';
};
