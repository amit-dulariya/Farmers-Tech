// Background Slideshow
const backgrounds = [
    'url("photo1.jpg")', // Local photo1.jpg
    'url("photo 2.jpg")', // Local photo 2.jpg
    'url("photo 3.jpg")'  // Local photo 3.jpg
];

let currentBg = 0;
const heroBg = document.querySelector('.hero-bg-slideshow');

// Preload images for smooth transitions
backgrounds.forEach(bg => {
    const img = new Image();
    const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
    if (match) img.src = match[1];
});

// Initialize first background
heroBg.style.backgroundImage = backgrounds[0];

// Change background every 4 seconds with fade
function changeBackground() {
    heroBg.style.opacity = '0.7'; // Start fade out
    setTimeout(() => {
        currentBg = (currentBg + 1) % backgrounds.length;
        heroBg.style.backgroundImage = backgrounds[currentBg];
        heroBg.style.opacity = '1'; // Fade in
    }, 500); // Half-second delay for fade
}

setInterval(changeBackground, 4000); // Change every 4 seconds

// Simple weather alert (placeholder—replace with real API like OpenWeatherMap)
function showWeather() {
    alert('Weather Update: Sunny, 75°F. Ideal for planting! (Integrate a real API for live data.)');
}

// Search Form Handler (demo—alerts the search term; integrate with real search logic)
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        alert(`Searching for: "${searchTerm}". Results would appear here! (Demo - Add real search functionality.)`);
        // Example: You could filter content or redirect to a search results page
    }
});

// Marketplace form handler (demo—adds listing to page)
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const product = e.target[0].value;
    const price = e.target[1].value;
    const quantity = e.target[2].value || 'Unlimited';
    
    const listing = document.createElement('div');
    listing.innerHTML = `<p><strong>${product}</strong> - $${price}/unit (${quantity})</p>`;
    document.getElementById('listings').appendChild(listing);
    
    e.target.reset();
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form (demo—logs to console; use a service like Formspree for real submissions)
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted!'); // Replace with actual submission logic
    alert('Message sent! Thanks for reaching out.');
    this.reset();
});