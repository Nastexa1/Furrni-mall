document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check password length
    if (password.length < 6) {
        document.getElementById('message').innerText = "Password must be at least 6 characters.";
        return;
    }

    // Validate username and password
    if (username === "username" && password === "123456") {
        document.getElementById('message').innerText = "Login is successful!";
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = "Login is failed.";
        document.getElementById('message').style.color = 'red';
    }
});
