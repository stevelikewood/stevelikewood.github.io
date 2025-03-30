// Add this script to your static website's JavaScript file or embed it in a <script> tag in your HTML file

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the avatar element by its ID or class (update the selector as needed)
    const avatar = document.querySelector('#avatar'); // Replace '#avatar' with the correct selector for your avatar

    // Create an email element
    const emailElement = document.createElement('div');
    emailElement.textContent = '123@qq.com'; // Replace with your email
    emailElement.style.position = 'absolute';
    emailElement.style.backgroundColor = '#fff';
    emailElement.style.border = '1px solid #ccc';
    emailElement.style.padding = '5px';
    emailElement.style.borderRadius = '5px';
    emailElement.style.display = 'none'; // Initially hidden
    emailElement.style.zIndex = '1000';

    // Append the email element to the body
    document.body.appendChild(emailElement);

    // Add click event listener to the avatar
    avatar.addEventListener('click', (event) => {
        // Toggle the visibility of the email element
        if (emailElement.style.display === 'none') {
            emailElement.style.display = 'block';
            emailElement.style.left = `${event.pageX}px`;
            emailElement.style.top = `${event.pageY}px`;
        } else {
            emailElement.style.display = 'none';
        }
    });
});