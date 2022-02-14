let total = 0;
let cart = [1, 2, 3, 4];

function checkOut(element) {
    total += element;
}

cart.forEach(checkOut);

console.log('Total: ' + total);