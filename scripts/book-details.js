import { books } from "../data/books.js";
import { addToCart } from "../data/cart.js";

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    if (bookId) {
        getBookSummary(bookId);

        document.getElementById('js-add-to-cart').addEventListener('click', () => {
            console.log(bookId)
            addToCart(bookId);
        });
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