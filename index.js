var result = [];
var total = 0;

function addToGun(productName, productPrice) {
    result.push({ name: productName, price: productPrice });
    total = total+productPrice;
    displayGun();
}

function displayGun() {
    var gung = document.getElementById('gun');
    var killer = document.getElementById('allgun');
    gung.innerHTML = '';
    result.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - DT' + item.price;
        gung.append(li);
    });
    killer.textContent = 'DT' + total; // Assuming 'killer' represents the total amount
}

// Checkout
function validation() {
    alert('Welcome, killer! Total: DT ' + total);
    result = [];
    total = 0;
    displayGun();
}

// Logout function
document.getElementById("button").addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = './login.html';
});
function stores() {
    window.open("https://www.facebook.com/?locale=fr_FR", "_blank")
}

function store() {
    window.open("https://www.instagram.com/", "_blank")
}