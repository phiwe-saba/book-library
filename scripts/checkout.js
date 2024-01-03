import { books } from "../data/books.js";
import { cart } from "../data/cart.js";

/*let cartHTML = '';

document.addEventListener("DOMContentLoaded", function() {
    const cartItem = JSON.parse(localStorage.getItem('cart')) || [];

    const cartDetailsElement = document.querySelector('.js-details-container');

    console.log(cartDetailsElement);

    if (cartDetailsElement) {
        if (cartItem.length > 0) {
            cartItem.forEach(item => {
                cartHTML += `
                <div class="book-image">
                    <img src="../images/112974900.jpg" alt="">
                </div>
                <div class="book-details">
                    <h1>To Free The Captives</h1>
                    <p>Tracy K. Smith</p>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, sapiente asperiores eveniet laborum, suscipit quae hic deserunt explicabo quisquam minus incidunt non quo laudantium molestiae odio sequi nostrum. Impedit, minus!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae in placeat maiores eos, deserunt, error consectetur recusandae expedita non, rem sit hic alias soluta reiciendis eligendi autem quas. Nesciunt, doloribus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ducimus fugiat sapiente pariatur sit sequi vero nemo soluta voluptatibus officiis? Facilis minus facere ratione dolore iste, labore corrupti atque ducimus?
                    </span>
                    <div class="quantity">
                        <select name="qty" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10+</option>
                        </select>
                        <button>Delete</button>
                    </div>
                </div>
                
                `;
            });

            console.log(cartHTML);
            document.querySelector('.js-details-container').innerHTML = cartHTML;
        }
    }
});*/


let cartHTML = '';

let matchingItem;

cart.forEach((cartItems) => {
    const bookId = cartItems.bookId;

    console.log(bookId);
    
    books.forEach((book) => {
        if (book.id === bookId) {
            matchingItem = book;
        }
    });

    console.log('checkout', matchingItem);

    cartHTML += `
        <div class="book-image">
            <img src="${matchingItem.image}" alt="">
        </div>
        <div class="book-details">
            <h1>${matchingItem.name}</h1>
            <p>${matchingItem.author}</p>
            <span>
                ${matchingItem.description}    
            </span>
            <div class="quantity">
                <select name="qty" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10+">10+</option>
                </select>
                <button>Delete</button>
            </div>
        </div>
    `;
});

console.log('ssss',cartHTML);
document.querySelector('.js-details-container').innerHTML = cartHTML;