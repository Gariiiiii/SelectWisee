// Array of slogans to display in typing animation
const slogans = ["your perfect match", "the best product", "your ideal device"];
let currentSlogan = 0;
let currentChar = 0;

function typeSlogan() {
    const sloganElement = document.getElementById("slogan");
    const text = slogans[currentSlogan];

    // Type the next character in the slogan
    if (currentChar < text.length) {
        sloganElement.innerHTML += text.charAt(currentChar);
        currentChar++;
        setTimeout(typeSlogan, 100); // Adjust typing speed here
    } else {
        setTimeout(eraseSlogan, 2000); // Pause before erasing
    }
}

function eraseSlogan() {
    const sloganElement = document.getElementById("slogan");

    // Erase characters one by one
    if (currentChar > 0) {
        sloganElement.innerHTML = sloganElement.innerHTML.slice(0, -1);
        currentChar--;
        setTimeout(eraseSlogan, 50); // Adjust erasing speed here
    } else {
        currentSlogan = (currentSlogan + 1) % slogans.length; // Move to next slogan
        setTimeout(typeSlogan, 500); // Pause before starting new slogan
    }
}

window.onload = typeSlogan; // Start typing animation when the page loads


// Select all input fields with the class 'input'
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  
  // Add 'focus' class to parent when input is focused
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  
  // Remove 'focus' class if input is empty after blur
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Add event listeners for focus and blur on all inputs
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const popup = document.getElementById("popup");
const form = document.querySelector(".form");

function openPopup(event) {
  event.preventDefault();
  popup.classList.add("open-popup");
  
  form.classList.add("hide");
}

function closePopup() {
  popup.classList.remove("open-popup");
  form.classList.remove("show");
}

function backToHome() {
  window.location.href = 'index.html';
}


// Close navbar when a link is clicked
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Check if the navbar is expanded
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click(); // This simulates a click to close the navbar
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.querySelector(".search-bar button");
        const searchBar = document.querySelector(".search-bar");

        searchButton.addEventListener("click", function(event) {
            if (window.innerWidth <= 480) {
                event.preventDefault(); // Prevents form submission
                searchBar.classList.toggle("expanded");
            }
        });
});


document.getElementById("filter-header").addEventListener("click", function () {
    const filterSections = document.getElementById("filter-sections");
    filterSections.classList.toggle("active");
});


