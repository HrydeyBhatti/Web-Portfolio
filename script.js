//Create Array of Messages
const messages = [
    "Hi, I'm Hrydey !",
    "Data Science & Computing Student at Birkbeck University, Univesity Of London",
    "Building insightful solutions using data and code"
]


let currentIndex = 0; //Index

const textElement = document.getElementById("intro-text");

textElement.addEventListener("mouseenter", () => {

    textElement.style.opacity = 0;

    //Move to next message and shows how the message fades
    setTimeout ( () => {
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.textContent = messages[currentIndex];
        textElement.style.opacity = 1; //Fade back in
    }, 400)
});