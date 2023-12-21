import { books } from "../data/books.js";
import { addToCart } from "../data/cart.js";

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    if (bookId) {
        getBookSummary(bookId);

        document.getElementById('js-add-to-cart').addEventListener('click', () => {
            console.log('Phiwe', bookId)
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
                    <div class="book-items">
                        <button id="js-add-to-cart">
                            <!--Add to cart-->
                            <a href="./checkout.html">Add to cart</a>
                        </button>
                    </div>
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
                <div class="book-rec">
                    <h3>Recommendations</h3>
                    <div class="rec">
                        <img src="${book.image}" alt="">
                    </div>
                    <div class="rec">
                        <img src="${book.image}" alt="">
                    </div>
                    <div class="rec">
                        <img src="${book.image}" alt="">
                    </div>
                </div>
            `;
        }
    });

    document.querySelector('.js-book-details').innerHTML = bookHTML;
}