import { books } from "../data/books.js";

let booksHTML = '';

books.forEach((book) => {
    booksHTML += `
        <div class="book-preview">
            <div class="book-image">
                <a class="js-preview-book"  href="#" data-book-id="${book.id}">
                    <img src="${book.image}" alt="">
                </a>
            </div>
        </div>
    `;
});

document.querySelector('.js-books-grid').innerHTML = booksHTML;

document.querySelectorAll('.js-preview-book')
    .forEach((bookId) => {
        bookId.addEventListener('click', () => {
            const id = bookId.dataset.bookId;
            window.location.href = `book-details.html?bookId=${id}`;
        });
    });