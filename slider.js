

// Array of image paths
const images = [
    '../images//slider_3.jpg',
    '../images//slider_2.jpg',
    '../images//slider_1.jpg',
    '../images//slider_4.jpg',
    '../images//slider_5.jpg'
];

let currentIndex = 0; // Track the current image index

// Select the slider element
const slider = document.getElementById('sliderid');

// Select buttons
let prevButton = document.getElementById('sbtn1');
let nextButton = document.getElementById('sbtn2');

// Function to update the slider background
function updateSlider(index) {
    slider.style.backgroundImage = `url(${images[index]})`;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to the previous image
    updateSlider(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Go to the next image
    updateSlider(currentIndex);
});
