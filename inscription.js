var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var phoneInput = document.getElementById("phone");
var signUpButton = document.getElementById("button");
signUpButton.addEventListener("click", function () {
    var usernameValue = usernameInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var phoneValue = phoneInput.value;

    alert("SignUp clicked!\nUsername: " + usernameValue + "\nEmail: " + emailValue + "\nPassword: " + passwordValue + "\nPhone: " + phoneValue);
    window.location.href = "login.html";
    localStorage.setItem('email', emailValue)
    localStorage.setItem('pass', passwordValue)
});


