// Assuming you're using vanilla JavaScript and not jQuery based on your script.js file
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const openButton = document.querySelector('.openbtn2');

    // Toggle the 'active' class on both the navbar and open button
    navbar.classList.toggle('active');
    openButton.classList.toggle('active');
}

// Get the openbtn2 element and attach the event listener
const openButton = document.querySelector('.openbtn2');
openButton.addEventListener('click', toggleMenu);
