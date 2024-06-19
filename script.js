document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        showError('name', 'Name can only contain letters and spaces.');
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        showError('phone', 'Phone number must be in the format (123) 456-7890.');
        isValid = false;
    }
    
    // Date validation
    const eventDate = document.getElementById('eventDate').value;
    if (!eventDate) {
        showError('eventDate', 'Please select a valid date.');
        isValid = false;
    }
    
    // Tickets validation
    const tickets = parseInt(document.getElementById('tickets').value, 10);
    if (isNaN(tickets) || tickets < 1 || tickets > 10) {
        showError('tickets', 'Number of tickets must be between 1 and 10.');
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
});

function showError(inputId, message) {
    const inputGroup = document.getElementById(inputId).closest('.input-group');
    const errorElement = inputGroup.querySelector('.error');
    errorElement.textContent = message;
    inputGroup.classList.add('error');
}
