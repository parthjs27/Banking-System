
// On refresh it loads to the login page
// -----------------------Start---------------------------
window.addEventListener('load', function() {
    // Check if the page was refreshed
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Redirect to the sign_in.html page on refresh
        window.location.href = 'login.html';
    }
});
// ------------------------End----------------------------
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// Funtionality of the peek eye in the Password Field 
// -----------------------Start---------------------------
const peekImage = document.getElementById('peekImage');
const button = peekImage.parentElement;

button.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    
    const mouseX = event.clientX - buttonRect.left - buttonRect.width / 2; // Centering on button
    const mouseY = event.clientY - buttonRect.top - buttonRect.height / 2; // Centering on button
    
    // Limit movement within the button
    const imageX = Math.max(Math.min(mouseX * 0.1, buttonRect.width / 2 - 10), -buttonRect.width / 2 + 10); // Adjust limits
    const imageY = Math.max(Math.min(mouseY * 0.1, buttonRect.height / 2 - 10), -buttonRect.height / 2 + 10); // Adjust limits
    
    // Apply the transformation with 3D rotation
    peekImage.style.transform = `translate(-50%, -50%) translate(${imageX}px, ${imageY}px) rotateY(${mouseX * 0.1}deg) rotateX(${-mouseY * 0.1}deg)`;
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}
// ------------------------End----------------------------
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// Validation of Username, email and password 
// -----------------------Start---------------------------
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email') ? document.getElementById('email').value : null;
    const password = document.getElementById('password').value;
    
    let isValid = true;
    let errorMessage = '';
    
    // Validate username
    if (username.trim() === '' || username.length < 3) {
        isValid = false;
        errorMessage += 'Username must be at least 3 characters long.\n';
    }
    
    // Validate email (only for sign-up)
    if (email !== null && (email.trim() === '' || !validateEmail(email))) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }
    
    // Validate password
    if (!validatePassword(password)) {
        isValid = false;
        errorMessage += 'Password must be at least 6 characters long.\n'
        errorMessage += 'Contain at least one capital letter. \n'
        errorMessage += 'One special character, and one number.\n';
    }

    if (isValid) {
        showAlert('Form submitted successfully!');
    } else {
        showAlert('Error:\n' + errorMessage);
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Password must be at least 6 characters long
    if (password.length < 6) return false;
    
    // Regex to check for at least one capital letter, one special character, and one number
    const capitalLetterPattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*(){}|<>]/;
    const numberPattern = /[0-9]/;

    return capitalLetterPattern.test(password) &&
           specialCharacterPattern.test(password) &&
           numberPattern.test(password);
}

// Function to show custom alert
function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertBox.style.display = 'block';
}

// Function to close custom alert
function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
}

// ------------------------End----------------------------
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*