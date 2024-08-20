

const button_descriptions = {
    week1 : 'Some value',
    week2 : 'another value'
};

// Get the pop-up element
const popup = document.getElementById('popup');

// Get the <span> element that closes the pop-up
const closeButton = document.querySelector('.close-button');

// Function to show the pop-up with a custom message
function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    popup.style.display = 'block';
}

// Function to hide the pop-up
function closePopup() {
    popup.style.display = 'none';
}

// Event listener to close the pop-up when the close button is clicked
closeButton.addEventListener('click', closePopup);

// Add event listeners to each button to show the pop-up with a specific message
document.querySelectorAll('.fall-info-buttons').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;
        showPopup(buttonText);
    });
});

