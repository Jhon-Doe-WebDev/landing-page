const navMenu = document.querySelector('#nav-menu');
const toggleNavBttn = document.querySelector('#toggle-nav-bttn');
let currentIndex = 0; // Track the current slide
const slides = document.querySelectorAll('.carousel-item'); // Get all slides
const totalSlides = slides.length; // Total number of slides

const toggleNavMenu = () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('fixed');
}

const hideNavMenu = (e) => {
    if(e.target == navMenu || e.target == toggleNavBttn) return;
    navMenu.classList.remove('fixed');
    navMenu.classList.add('hidden')
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentIndex * 100; // Calculate offset
    carouselInner.style.transform = `translateX(${offset}%)`; // Move the carousel
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
    updateCarousel(); // Update the carousel position
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    updateCarousel(); // Update the carousel position
}