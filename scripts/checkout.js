import { books } from "../data/books.js";
import { cart } from "../data/cart.js";

let cartHTML = '';

cart.forEach((cartItem) => {
    const bookId = cartItem.bookId;

    let matchingItem;

    books.forEach((book) => {
        if (book.id === bookId) {
            matchingItem = book;
        }
    });

    cartHTML += `
        <div class="book-image">
            <img src="${matchingItem.id}" alt="">
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
        <div class="billing">
            <h1>Order Summary</h1>
            <div class="details">
                <div class="order-summary">
                    <p class="items">Subtotal</p>
                    <p class="price">R500</p>
                </div>
                <div class="order-summary">
                    <p class="items">Shipping Fee</p>
                    <p class="price">R100</p>
                </div>
                <div class="order-summary">
                    <p class="items">Estimated Tax</p>
                    <p class="price">15%</p>
                </div><hr>
                <div class="order-summary">
                    <p class="items total">Order Total:</p>
                    <p class="price total">R500</p>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    `;
});