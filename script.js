//Create Array of Messages
const messages = [
    "Hi, I'm Hrydey !",
    "Data Science & Computing Student at Birkbeck University, Univesity Of London",
    "Building insightful solutions using data and code"
]


let currentIndex = 0; //Index

const textElement = document.getElementById("intro-text");

textElement.addEventListener("mouseenter", () => {
    //Move to next message
    currentIndex = (currentIndex + 1) % messages.length;
    textElement.textContent = messages[currentIndex];

});