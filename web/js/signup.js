var ls = new SecureLS({ encodingType: 'aes' });
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

document.addEventListener('DOMContentLoaded', function () {

    if (signupForm) {
        populateYears();
        populateMonths();

        document.getElementById('year').onchange = function () {
            populateDays(document.getElementById('month').value);
        }

        document.getElementById('month').onchange = function () {
            populateDays(this.value);
        }

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            addUser();
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            authenticate();
        });
    }
});


function populateYears() {
    var yearSelect = document.getElementById('year');
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
        var option = document.createElement('option');
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function populateMonths() {
    var monthSelect = document.getElementById('month');
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    months.forEach(function (month, index) {
        var option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

function populateDays(month) {
    var daySelect = document.getElementById('day');
    var yearSelect = document.getElementById('year');
    var year = yearSelect.value;
    var dayCount;
    if (month === '2') {
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            dayCount = 29;
        } else {
            dayCount = 28;
        }
    } else if (month === '4' || month === '6' || month === '9' || month === '11') {
        dayCount = 30;
    } else {
        dayCount = 31;
    }

    daySelect.innerHTML = '';
    for (var i = 1; i <= dayCount; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

function addUser() {
    let user = {
        username: document.getElementById("userName").value,
        password: document.getElementById("password").value,
        firstname: document.getElementById("firstName").value,
        lastname: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("telephone").value,
        dobDay: document.getElementById("day").value,
        dobMonth: document.getElementById("month").value,
        dobYear: document.getElementById("year").value,

    };
    console.log('User info before encryption:', user);

    if (ls.get(user.username)) {
        alert("Username already exists, please re-enter it.");
        return;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordPattern.test(user.password)) {
        alert("Please contain numbers, uppercase and lowercase letters, and symbols, and must be at least 8 characters long.");
        return;
    }

    var phonePattern = /^\+?(\d{1,3})?[-. ]?\(?\d{1,3}\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;
    if (!phonePattern.test(user.phone)) {
        alert("TelepThe phone number does not meet the requirements, please re-enterhone");
        return;
    }

    if ((user.username.length > 50) || (user.password.length > 50) || (user.firstname.length > 50) || (user.lastname.length > 50)) {
        alert('Input must be less than 50 characters.');
        return;
    }

    ls.set(user.username, user); // Data is automatically encrypted
    console.log('User info after decryption:', localStorage.getItem(user.username));
    console.log('Decrypted data:', ls.get(user.username));
    alert("Sign up successful!");

};

function authenticate() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let user = ls.get(username);
    if (user && user.password === password) {
        alert("Login successful!");
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}
