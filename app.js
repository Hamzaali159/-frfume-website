let currentSlide = 0;
const totalSlides = 5;  // Total number of slides to be moved (8 cards in total, 4 visible at a time)

function moveSlider(direction) {
  const cardContainer = document.querySelector('.card-container');
  const totalCards = document.querySelectorAll('.card-item').length;
  const cardsToShow = 4; // Number of cards to show at once

  if (direction === 'next') {
    if (currentSlide < totalCards - cardsToShow) {
      currentSlide++;
    } else {
      currentSlide = 0; // Loop back to the first slide
    }
  } else if (direction === 'prev') {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalCards - cardsToShow; // Loop back to the last slide
    }
  }

  const offset = -currentSlide * (100 / cardsToShow); // Calculate the offset
  cardContainer.style.transform = `translateX(${offset}%)`;
}

// <!-- Optional: Add JavaScript to further control hover/focus effects -->

    // You can use JavaScript to add further interactions like clicking to focus
    const card = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('focused');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('focused');
        });
    });

    const userInfo = {
      username: "JohnDoe",
      email: "johndoe@example.com",
      joinDate: "January 2022"
  };

  document.getElementById("username").textContent = userInfo.username;
  document.getElementById("email").textContent = userInfo.email;
  document.getElementById("joinDate").textContent = userInfo.joinDate;


  let currentSlides = 0;
const cards = document.querySelectorAll('.card-item');
const totalCards = cards.length;

// Get the card container
const cardContainer = document.querySelector('.card-container');

// Update the slider to move to the next or previous card
function moveSlider(direction) {
    const cardWidth = cards[0].offsetWidth; // Get the width of one card

    if (direction === 'next') {
        // Move to the next slide
        currentSlide = (currentSlide + 1) % totalCards; // Loop back to the first card
    } else {
        // Move to the previous slide
        currentSlide = (currentSlide - 1 + totalCards) % totalCards; // Loop back to the last card
    }

    updateSlider(cardWidth);
}

// Function to update the position of the card container based on the current slide
function updateSlider(cardWidth) {
    cardContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

// Optional: If you want to trigger the update whenever the screen resizes
window.addEventListener('resize', () => {
    const cardWidth = cards[0].offsetWidth;
    updateSlider(cardWidth);
});
// JavaScript for automatic and manual sliding functionality

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// Function to move slider manually
function moveSlider(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Auto Slide Functionality
function autoSlide() {
    moveSlider('next');
}

// Start automatic sliding every 5 seconds
let autoSlideInterval = setInterval(autoSlide, 5000);

// Function for the "Quick View" button
function showAlert() {
    alert("This is a quick view of the fragrance!");
}

// Optional: Stop auto sliding when user manually clicks the next/prev button
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000); // Restart the interval after 5 seconds
}

// Event listeners for manual buttons
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    moveSlider('prev');
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    moveSlider('next');
});
