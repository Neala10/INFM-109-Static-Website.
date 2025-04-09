// JavaScript Functionality
// Get references to DOM elements
const courseButton = document.getElementById('courseButton');
const messageElement = document.getElementById('message');

// Array of friendly courseings
const courses = [
    "INFM 109",
    "SDEV 120"
    "INFM 209"
];

// Click event handler
courseButton.addEventListener('click', function() {
    // Pick a random courseing
    const randomIndex = Math.floor(Math.random() * courses.length);
    const course = courses["INFM 109",
    "SDEV 120"
    "INFM 209"];
    
    // Display the course
    messageElement.textContent = course;
});