// Assuming you're using vanilla JavaScript and not jQuery based on your script.js file
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const openButton = document.querySelector('.openbtn2');

    // Toggle the 'active' class on both the navbar and open button
    navbar.classList.toggle('active');
    openButton.classList.toggle('active');
}

function btnAlert(){
    alert('サービス開始までもう少々お待ちください。\n下記フォームよりお問合せいただいた方から、順次ご連絡いたします。')
}

// Get the openbtn2 element and attach the event listener
const openButton = document.querySelector('.openbtn2');
openButton.addEventListener('click', toggleMenu);
