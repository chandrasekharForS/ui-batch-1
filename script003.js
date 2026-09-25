document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    // Get form values
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Predefined valid credentials
    let validUsername = "user123";
    let validPassword = "pass123";

    let message = "";

    if(username == validUsername && password == validPassword) {
        message = "Welcome, " + username +". You have logged in successfully."
    }
    else if(username != validUsername && password != validPassword) {
        message = "You have given wrong credentials.";
    }
    else if(username != validUsername) {
        message = "You have given wrong user name.";
    }
    else if(password != validPassword) {
        message = "You have given wrong password.";
    }
   
    document.getElementById("message").innerText = message;

});