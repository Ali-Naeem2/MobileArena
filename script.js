
document.getElementById('login-button').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Clear previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate inputs
    if (!username) {
        usernameError.textContent = 'Username is required';
    }

    if (!password) {
        passwordError.textContent = 'Password is required';
    }

    if (username && password) {
        // Check credentials
        if (username === 'Admin' && password === '123456') {
            window.location.href = 'home.html';
        } else {
            usernameError.textContent = 'Invalid username or password';
        }
    }
});
