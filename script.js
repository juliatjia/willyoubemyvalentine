(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/

function toggleLetter() {
    const message = document.getElementById("secret-message");
    const letterText = document.getElementById("letter-text");

    if (message.style.display === "none") {
        message.style.display = "block";
        letterText.textContent = "Hide the secret message!";
    } else {
        message.style.display = "none";
        letterText.textContent = "Click me for a secret message!";
    }
}

const messages = [
    "are you sure?",
    "really sure??",
    "rly boi william is gonna be sad",
    "k imma just go cry in a corner",
    "stop cappin dawg ik u wanna say yes",
    "bro wants to be valentines with marvel rivals instead",
    "im not gonna buy u anymore ferro rochers.",
    "just say u dont love me",
    "k williams sad now.",
    "dAWG there's no way u saying no to william and dis face"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleBackToHome() {
    window.location.href = "index.html";
}

let moveDistance = 20;
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.addEventListener("mouseenter", function () {
        moveNoButton();
        enlargeYesButton();
    });
});

// function moveNoButton() {
//     const noButton = document.querySelector('.no-button');

//     // Get viewport width and height
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Get new random position within the viewport
//     let newX = Math.random() * (viewportWidth - 100); // Keep some margin
//     let newY = Math.random() * (viewportHeight - 100);

//     noButton.style.position = "absolute";
//     noButton.style.left = `${newX}px`;
//     noButton.style.top = `${newY}px`;

//     // Update button text
//     noButton.textContent = messages[messageIndex];
//     messageIndex = (messageIndex + 1) % messages.length;

//     // Increase move distance to make the button jump further next time
//     moveDistance += 20;
// }

function moveNoButton() {
    const noButton = document.querySelector('.no-button');

    // Get the container (the space where the question is located)
    const container = document.querySelector('.ques_container');
    const containerRect = container.getBoundingClientRect();

    // Ensure the button stays within the container and doesn't move outside
    const minY = containerRect.top + window.scrollY; // 755px offset from the top
    const maxY = containerRect.bottom + window.scrollY - noButton.offsetHeight;

    // Generate random positions within the allowed space
    const newX = Math.random() * (window.innerWidth - 200); // Keep some margin
    const newY = Math.random() * (maxY - minY) + minY; // Ensure it stays within the scroll area

    // Apply the new position to the "No" button
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;

    // Update button text with a new message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase move distance to make the button jump further next time
    moveDistance += 20;
}

function enlargeYesButton() {
    const yesButton = document.querySelector('.yes-button');
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    // Make the "Yes" button grow bigger
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}