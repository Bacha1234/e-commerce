// Select all "place order" buttons
const buyButtons = document.querySelectorAll('#placeorderbtn');

// Add click event listeners to each button
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to cart.html when the button is clicked
        window.location.href = 'placeorder.html';
    });
});

