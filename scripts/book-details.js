import { books } from "../data/books.js";

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    if (bookId) {
        getBookSummary(bookId);
    } else {
        console.error("Book ID not provided in URL.");
    }
});
/*
let bookHTML = '';

books.forEach((book) => {
    bookHTML += `
                <div class="book-image">
                    <img src="${book.image}" alt="No Cover">
                    <button class="js-add-to-cart" data-book-id="${book.id}">ADD TO CART</button>
                </div>
                <div class="book-info">
                    <h3>${book.name}</h3>
                    <p>${book.author}</p>
                    <p>R${(book.price / 1).toFixed(2)}</p>
                    <div class="rating-image">
                        <img src="./images/ratings/rating-50.png" alt="">
                    </div>
                    <p>${book.rating.count} ratings <span> - ${book.rating.stars} reviews</span></p>
                    <span class="summary">${book.description}</span>
                </div>
            `;
});
*/
function getBookSummary(bookId) {
    let bookHTML = '';

    books.forEach((book) => {
        if (book.id === bookId) {
            bookHTML += `
                <div class="book-image">
                    <img src="${book.image}" alt="No Cover">
                    <button class="js-add-to-cart" data-book-id="${book.id}">ADD TO CART</button>
                </div>
                <div class="book-info">
                    <h3>${book.name}</h3>
                    <p>${book.author}</p>
                    <p>R${(book.price / 1).toFixed(2)}</p>
                    <div class="rating-image">
                        <img src="./images/ratings/rating-50.png" alt="">
                    </div>
                    <p>${book.rating.count} ratings <span> - ${book.rating.stars} reviews</span></p>
                    <span class="summary">${book.description}</span>
                </div>
            `;
        }
    });

    document.querySelector('.js-book-details').innerHTML = bookHTML;
}
/*
document.querySelector('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const bookId = button.dataset.bookId;
            console.log(bookId);
        });
    });*/