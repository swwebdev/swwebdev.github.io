"use strict";
//Array of Gallery Images
const gallery_images = ["images/cattrees.png", "images/thinggetswashed.png", "images/volunteerwithtardigrade.png"];
document.addEventListener("DOMContentLoaded", () => {
    //Loads the image from the DOM
    const displayImage = document.querySelectorAll("img");
    //Left Button Event Listener
    document.querySelector("#left_button").addEventListener("click", evt => {
        //shifts array items to the left
        let firstItem = gallery_images.shift();
        gallery_images.push(firstItem);
        //display images
        for (let i = 0; i < displayImage.length; i++) {
            displayImage[i].src = gallery_images[i];
        }
    });
    //Right Button Event Listener
    document.querySelector("#right_button").addEventListener("click", evt => {
        //shifts array items to the right
        let lastItem = gallery_images.pop();
        gallery_images.unshift(lastItem);
        //display images
        for (let i = 0; i < displayImage.length; i++) {
            displayImage[i].src = gallery_images[i];
        }
    });
});
