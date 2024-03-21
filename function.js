// -------------------SWIPER SLIDE
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        // Autoplay settings
        autoplay: {
            delay: 1000, // Delay between slides in milli seconds
            disableOnInteraction: false, // Disable autoplay when user interacts with slider
        },
         // Speed of slide transition (in milliseconds)
         speed: 5000, // 1 second
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});

var carousel = document.getElementById('carouselExampleSlidesOnly');

// Start the carousel slide for my aside function
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000, // Slide every 5 seconds
    pause: 'hover', // Pause on hover
    wrap: true // Loop through slides
});

// CONTACT.HTML
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Form validation logic goes here
    // You can use JavaScript to validate form fields before submission
    // Example: check if name, email, and message fields are not empty
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // If all fields are filled, you can submit the form via AJAX or perform other actions
    // For demonstration purposes, we'll just log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Clear the form fields after submission
    document.getElementById("contactForm").reset();
  });
  