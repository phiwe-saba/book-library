import { books } from "../data/books.js";

/*const book = [
    {
        id: "1",
        image: "images/2657._SX300_.jpg",
        name: "To Kill A Mockingbird",
        author: "Harper Lee",
        rating: {
            stars: 4.5,
            count: 6000
        },
        price: 500
    },
    {
        id: "2",
        image: "images/43641._SX300_.jpg",
        name: "Water for Elephants",
        author: "Sara Gruen",
        rating: {
            stars: 3.5,
            count: 12
        },
        price: 500
    },
    {
        id: "3",
        image: "images/4667024.jpg",
        name: "The Help",
        author: "Kathryn Stockett",
        rating: {
            stars: 5,
            count: 5000
        },
        price: 500
    }
]*/

let booksHTML = '';

books.forEach((book) => {
    booksHTML += `
        <div class="book-preview">
            <div class="book-image">
                <a href="../book-details.html">
                    <img src="${book.image}" alt="">
                </a>
            </div>
        </div>
    `;
});

document.querySelector('.js-books-grid').innerHTML = booksHTML;