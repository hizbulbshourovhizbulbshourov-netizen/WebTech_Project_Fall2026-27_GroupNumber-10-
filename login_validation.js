document.getElementById("loginForm").addEventListener("submit", function(event) {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let userType = document.querySelector('input[name="user_type"]:checked');
    let message = document.getElementById("loginMessage");

    message.innerHTML = "";

 
    if (email === "") {
        event.preventDefault();
        message.innerHTML = "Username / Email cannot be empty.";
        return;
    }

  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.includes("@") && !emailPattern.test(email)) {
        event.preventDefault();
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    if (password.trim() === "") {
        event.preventDefault();
        message.innerHTML = "Password cannot be empty.";
        return;
    }

   
    if (password.length < 6) {
        event.preventDefault();
        message.innerHTML = "Password must contain at least 6 characters.";
        return;
    }

    
    if (!userType) {
        event.preventDefault();
        message.innerHTML = "Please select a user type.";
        return;
    }

    
    event.preventDefault();
    message.innerHTML = "Login validation successful!";

});

document.getElementById("loginForm").addEventListener("reset", function() {
    document.getElementById("loginMessage").innerHTML = "";
});