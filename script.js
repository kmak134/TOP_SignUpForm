const firstName = document.querySelector('#first-name')
const nameError = document.querySelector('.name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const phone = document.querySelector('#phone-number');
const phoneError = document.querySelector('.phone-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error')
const confirmPassword = document.querySelector('#confirmPassword');
const confirmPasswordError = document.querySelector('.confirm-password-error');
const submitBtn = document.querySelector('#submit-btn');
const signUpForm = document.querySelector('form');
const signUpError = document.querySelector('.signup-error');

firstName.addEventListener('focusout', () => {
    if (firstName.value.trim() == '') {
        firstName.classList.add('invalid-input');
        nameError.textContent = 'Please enter a name';
    }
});

firstName.addEventListener('focusin', () => {
    if (firstName.classList.contains('invalid-input')) {
        firstName.classList.remove('invalid-input');
    }
    nameError.textContent = '';
});

email.addEventListener('focusout', () => {
    if (email.value.trim() !== '') {
        if (email.checkValidity() == false) {
            email.classList.add('invalid-input');
            emailError.textContent = 'Please enter a valid email address';
        }
    }
});

email.addEventListener('focusin', () => {
    if (email.classList.contains('invalid-input')) {
        email.classList.remove('invalid-input');
    }
    emailError.textContent = '';
});

phone.addEventListener('focusout', () => {
    if (phone.value.trim() !== '') {
        if (phone.checkValidity() == false) {
            phone.classList.add('invalid-input');
            phoneError.textContent = 'Please enter a valid phone number';
        }
    }
});

phone.addEventListener('focusin', () => {
    if (phone.classList.contains('invalid-input')) {
        phone.classList.remove('invalid-input');
    }
    phoneError.textContent = '';
});

password.addEventListener('focusout', () => {
    // password must be greater than 10 characters
    if (password.value.trim().length < 8) {
        password.classList.add('invalid-input');
        passwordError.textContent = 'Password must have at least 8 characters';
    // password must contain a numerical digit
    } else if (!(/\d/.test(password.value))) {
        password.classList.add('invalid-input');
        passwordError.textContent = 'Password must contain a numerical digit'
    // password must contain a special character
    } else if (!(/[^A-Za-z0-9]/.test(password.value))) {
        password.classList.add('invalid-input');
        passwordError.textContent = 'Password must contain a special character';
    // password good
    } else {
        password.classList.add('check-passed');
        passwordError.textContent = '';
    }
});

password.addEventListener('focusin', () => {
    if (password.classList.contains('invalid-input')) {
        password.classList.remove('invalid-input');
    }
    if (password.classList.contains('check-passed')) {
        password.classList.remove('check-passed');
    }
    passwordError.textContent = '';
});

confirmPassword.addEventListener('focusout', () => {
    if (confirmPassword.value.trim() !== '') {
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('invalid-input');
            confirmPasswordError.textContent = 'Passwords do not match'
        } else {
            confirmPassword.classList.add('check-passed');
            confirmPasswordError.textContent = ''
        }
    }
});

confirmPassword.addEventListener('focusin', () => {
    if (confirmPassword.classList.contains('invalid-input')) {
        confirmPassword.classList.remove('invalid-input');
    }
    if (confirmPassword.classList.contains('check-passed')) {
        confirmPassword.classList.remove('check-passed');
    }
    confirmPasswordError.textContent = '';
});

submitBtn.addEventListener('click', () => {
    signUpError.textContent = '';
    if (firstName.value.trim() !== '' && 
        email.checkValidity() &&
        phone.checkValidity() &&
        password.value.trim().length >= 8 &&
        /\d/.test(password.value) &&
        /[^A-Za-z0-9]/.test(password.value) && 
        password.value == confirmPassword.value) {
            signUpForm.submit()
        } else {
            signUpError.textContent = 'Please fill in required fields.'
        }
});









