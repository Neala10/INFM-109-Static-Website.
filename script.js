// JavaScript Functionality
// Get references to DOM elements
const courseButton = document.getElementById('courseButton');
const messageElement = document.getElementById('message');

// ArraINFM 109",
    "SDEV 120",
    "INFM 120",
    "SDEV 140"]y of friendly courseings
const courses = [
    "


// Click event handler
courseButton.addEventListener('click', function() {
    // Pick a random courseing
    const randomIndex = Math.floor(Math.random(1) * courses.length);
    const course = courses["INFM 109",
    "SDEV 120",
    "INFM 120"]

    
    // Display the course
    messageElement.textContent = course;
});