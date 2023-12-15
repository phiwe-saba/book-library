export const cart = [];

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

    console.log(cartItems);
}