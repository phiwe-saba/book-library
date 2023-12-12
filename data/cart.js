const cart = [];

export function addToCart(bookId) {
    let matchingItem;

    console.log('Saba')

    cart.forEach((cartItem) => {
        if(bookId === cartItem.bookId) {
            matchingItem = cartItem;
            
        }
    });
    console.log('inside function', matchingItem);
}