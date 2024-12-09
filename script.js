const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to the button
changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
});



// Explaining getRandomColor():

//     letters contains all hexadecimal digits (0–9 and A–F), which are used in HTML color codes.
//     A for loop runs 6 times to generate a 6-character string (representing a valid hexadecimal color code).
//     Math.random() generates a random number between 0 and 1.
//     Math.random() * 16 generates a number between 0 and 15.
//     Math.floor() rounds the number down to the nearest whole number, ensuring we get an integer between 0 and 15.
//     letters[...] selects a random character from the letters string, appending it to the color string.
//     The color string starts with # and ends as a valid color code like #A3F4C1.

// Why it’s needed:
// This function generates a unique random color each time it is called.




// This is ChatGPT's idea ! not mine 😇 (to be honest)