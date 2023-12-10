import { books } from "../data/books.js";

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    console.log('SABA');
    if (bookId) {
        getBookSummary(bookId);
    } else {
        console.error("Book ID not provided in URL.");
    }
});

function getBookSummary(bookId) {
    let bookHTML = '';

    books.forEach((book) => {
        if (book.id === bookId) {
            bookHTML += `
                <div class="book-image">
                    <img src="${book.image}" alt="No Cover">
                    <button>R${(book.price / 1).toFixed(2)}</button>
                </div>
                <div class="book-info">
                    <h3>${book.name}</h3>
                    <p>${book.author}</p>
                    <div class="rating-image">
                        <img src="./images/ratings/rating-50.png" alt="">
                    </div>
                    <p>${book.rating.count} ratings <span> - ${book.rating.stars} reviews</span></p>
                    <span class="summary">${book.description}</span>
                </div>
            `;
        } else {
            console.error("Element with class 'js-book-details' not found.");
        }
    });

    console.log("Phiwe Saba", bookHTML);
    document.querySelector('.js-book-details').innerHTML = bookHTML;
}