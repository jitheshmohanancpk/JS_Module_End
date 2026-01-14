// Toggle Password Visibility
function togglePass(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

// Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
        
        const user = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('location').value,
            pass: document.getElementById('password').value,
            confirmPass: document.getElementById('confirmPassword').value
        };

        let isValid = true;

        // Validation Rules
        if (!/^[A-Za-z\s]+$/.test(user.city)) {
            document.getElementById('locError').innerText = "City must contain only alphabets";
            isValid = false;
        }
        if (!/^\d{10}$/.test(user.phone)) {
            document.getElementById('phoneError').innerText = "Phone must be 10 digits";
            isValid = false;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(user.pass)) {
            document.getElementById('passError').innerText = "Min 8 chars, mix of letters & numbers";
            isValid = false;
        }
        if (user.pass !== user.confirmPass) {
            document.getElementById('confirmError').innerText = "Passwords do not match";
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem(user.email, JSON.stringify(user));
            alert("Registration Successful!");
            window.location.href = "SignIn.html";
        }
    });
}

// SignIn Logic
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const pass = document.getElementById('signInPass').value;

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.pass === pass) {
            window.location.href = "travelapp.html";
        } else {
            alert("Invalid Email or Password. Please register first.");
        }
    });
}
