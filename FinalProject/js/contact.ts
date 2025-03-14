"use strict";

const form = document.getElementById('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form!.addEventListener('submit', e => {
    //prevents the the form from submitting before validation
    e.preventDefault();
    //validates the form
    validateInputs();
});

const setError = (element, message: string) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const emailValue = email!.value.trim();
    const phoneValue = phone!.value.trim();
    let validEmail = false;
    let validPhone = false;

    //Email Validation
    if(emailValue === ''){
        setError(email, 'Please enter an email')
    } else if (!emailValue.includes('@') || !emailValue.includes('.')){
        setError(email, 'Email is invalid')
    } else {
        setSuccess(email);
        validEmail = true;
    }
    //Phone Validation
    if(phoneValue === ''){
        setError(phone, 'Please enter a phone number')
    } else {
        setSuccess(phone);
        validPhone = true;
    }

    //Submits the validated form
    if ((validEmail === true) && (validPhone === true)){
        document.form.submit();
    }
};