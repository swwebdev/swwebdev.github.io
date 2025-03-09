"use strict";
var form = document.getElementById('form');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
form.addEventListener('submit', function (e) {
    //prevents the the form from submitting before validation
    e.preventDefault();
    //validates the form
    validateInputs();
});
var setError = function (element, message) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
var setSuccess = function (element) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
var validateInputs = function () {
    var emailValue = email.value.trim();
    var phoneValue = phone.value.trim();
    var validEmail = false;
    var validPhone = false;
    //Email Validation
    if (emailValue === '') {
        setError(email, 'Please enter an email');
    }
    else if (!emailValue.includes('@') || !emailValue.includes('.')) {
        setError(email, 'Email is invalid');
    }
    else {
        setSuccess(email);
        validEmail = true;
    }
    //Phone Validation
    if (phoneValue === '') {
        setError(phone, 'Please enter a phone number');
    }
    else {
        setSuccess(phone);
        validPhone = true;
    }
    //Submits the validated form
    if ((validEmail === true) && (validPhone === true)) {
        document.form.submit();
    }
};
