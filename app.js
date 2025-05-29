const userLang = navigator.language.split('-')[0];

const navMenu = document.querySelector('#nav-menu');
const toggleNavBttn = document.querySelector('#toggle-nav-bttn');

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

const goTopBtn = document.getElementById("goTopBtn");


if (userLang == 'en') {
    document.querySelectorAll(".lang-es").forEach(el => {
        el.classList.add('hidden');
    })
    document.querySelectorAll(".lang-en").forEach(el => {
        el.classList.remove('hidden');
    })
} else {
    document.querySelectorAll(".lang-en").forEach(el => {
        el.classList.add('hidden');
    })
    document.querySelectorAll(".lang-es").forEach(el => {
        el.classList.remove('hidden');
    })
}

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
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`; 
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel(); 
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel(); 
}


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.classList.remove("hidden");
    } else {
        goTopBtn.classList.add("hidden");
    }
};

goTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("fadeInUp");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.3
});

const animateBoxes = document.querySelectorAll('.animated');

animateBoxes.forEach(box => {
    observer.observe(box);  
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById("gmail-sender-name").value);
    const about = encodeURIComponent(document.getElementById("gmail-about").value);
    const content = encodeURIComponent(document.getElementById("gmail-content").value);

    const mailtoLink = `mailto:your-email@example.com?subject=${about}&body=Name: ${name}%0D%0AMessage: ${content}`;

    window.location.href = mailtoLink;
});
