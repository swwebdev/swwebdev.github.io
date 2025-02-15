//Code Modified by Sarah Wilson
"use strict";

const getElement = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    //Add ul for errors
    const form = getElement("form");
    form.parentNode.insertBefore(ul, form);

}

const processEntries = () => {
    // get form controls to check for validity
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const state = getElement("#state");
    const zipCode = getElement("#zip_code");
    const terms = getElement("#terms");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
            msgs.push("Email address is invalid.")
        }
    if (phone.value === "") {
        msgs.push("Please enter a mobile phone number."); 
    } 
    
    // submit the form or notify user of errors
    if (msgs.length === 0) {  // no error messages
        getElement("form").submit();  
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    getElement("form").reset();
    
    // remove error messages if any
    const ul = getElement("ul");
    if (ul !== null) ul.remove();
    
    getElement("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);  
    getElement("#email_address").focus();
});