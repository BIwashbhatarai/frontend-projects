var nameError = document.getElementById('nameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var passwordError = document.getElementById('passwordError');
var submitError = document.getElementById('submitError');
var togglePass = document.getElementById('togglePass');

function validateName() {
    var name = document.getElementById('Name').value;
     

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }   

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validatePhone() {
    var phone = document.getElementById('Phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Enter a valid 10-digit phone number';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    var email = document.getElementById('Email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        emailError.innerHTML = 'Enter a valid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePassword() {
    var password = document.getElementById('Password');
    var score = 0;

    togglePass.addEventListener('click', () => {
        if(password.type === 'password') {
            password.type = 'text';
            togglePass.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            password.type = 'password';
            togglePass.classList.replace('fa-eye-slash', 'fa-eye');
        }
    })

    if(password.length >= 8) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if(score <= 2) {
        passwordError.innerHTML = "Weak";
        passwordError.style.color = 'red';
        return false;
    } else if(score == 3 || score == 4) {
        passwordError.style.color = 'orange';
        passwordError.innerHTML = "Medium";
        return false;
    } else {
        passwordError.style.color = 'green';
        passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
        
    }

}

function validateMessage() {
    var message = document.getElementById('Message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + ' More Character Needed ';
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()) {
        submitError.style.display = 'block';
        setTimeout(function(){
            submitError.style.display = 'none';
        } ,3000);
        submitError.innerHTML = 'Please fix the error to submit.';
        return false;
    }
}