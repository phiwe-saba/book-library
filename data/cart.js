export const cart = [{
    id: "1",
    quantity: "1",
}];

export function addToCart(bookId) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingCartItem = cartItems.find(book => book.id === bookId);

    if (existingCartItem) {
        console.log('Book already exists');
    } else {
        const newCartItem = {
            id: bookId,
            quantity: 1
        };
        cartItems.push(newCartItem);
    }

    console.log('Saba',cartItems);
}

/*
let cartHTML = '';

//console.log(cartHTML);

cart.forEach((cartItems) => {
    const bookId = cartItems.bookId;

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
document.querySelector('.js-details-container').innerHTML = cartHTML;*/