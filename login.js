var LoginButton = document.getElementById("button");

LoginButton.addEventListener("click", function () {
    var emailValue = document.getElementById("Email").value;
    var passwordValue = document.getElementById("password").value;
    const email = localStorage.getItem('email')
    const pass = localStorage.getItem('pass')

    if (emailValue === email && passwordValue === pass) {
        alert("Login correct!");
        window.location.href = "index.html";
    }
});

