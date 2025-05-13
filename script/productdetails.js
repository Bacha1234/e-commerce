// Extract the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id'); // Get 'id' from the URL

console.log("Product ID from URL:", productId); // Debug: Log the ID

// Find the product section by ID directly
if (productId) {
    const productSection = document.getElementById(productId); 
    if (productSection) {
        productSection.classList.add('active'); // Add 'active' class to show details
    } else {
        document.body.innerHTML = "<h1>Product not found</h1>";
    }
} else {
    document.body.innerHTML = "<h1>No product selected</h1>";
}


// Get all product detail sections
const productSections = document.querySelectorAll('.details');

// Loop through each product section
productSections.forEach(section => {
    // Get the main image container for this section
    const mainImage = section.querySelector('.main_img .img');

    // Get all preview images for this section
    const previewImages = section.querySelectorAll('.opimg');

    // Add click event listener to each preview image
    previewImages.forEach(image => {
        image.addEventListener('click', () => {
            // Get the background image of the clicked preview image
            const imageUrl = window.getComputedStyle(image).backgroundImage;

            // Update the main image to show the clicked image
            mainImage.style.backgroundImage = imageUrl;
        });
    });
});


// Select all "Buy Now" buttons
const buyButtons = document.querySelectorAll('#buybtn');

// Add click event listeners to each button
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to cart.html when the button is clicked
        window.location.href = 'cart.html';
    });
});


// Reset the cart count on page load
localStorage.setItem('cartCount', 0);

// Get the cart count element
const cartCount = document.getElementById('cartCount');

// Initialize the cart count to 0
let count = 0;

// Update the cart count in the header
cartCount.textContent = count;

// Adding to cart functionality
const addtoCartButtons = document.querySelectorAll('#addtocartbtn');
addtoCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        localStorage.setItem('cartCount', count); // Save to localStorage
        cartCount.textContent = count; // Update header dynamically
        alert("Item added to cart!");
    });
});



