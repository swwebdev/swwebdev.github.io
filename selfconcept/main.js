"use strict";

const textBox = document.querySelector('#textbox');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const portrait = document.querySelector('#portrait');

const hoverText = [
  "I've been passionate about drawing for as long as I can remember.",
  "I started animating a few years ago. I think I've made a lot of progress in that time!",
  "I don't watch a lot of TV or read a lot of books, but I do play a lot of games. I'm learning to make my own too.",
  "Web development is my latest interest. It's like all my other interests wrapped into one!",
  "Hover over a picture for an explanation!"
]

button1.addEventListener("mouseover", event => {
  textBox.textContent = hoverText[0];
})


button2.addEventListener("mouseover", event => {
  textBox.textContent = hoverText[1];
})

button3.addEventListener("mouseover", event => {
  textBox.textContent = hoverText[2];
})

button4.addEventListener("mouseover", event => {
  textBox.textContent = hoverText[3];
})


portrait.addEventListener("mouseover", event => {
  textBox.textContent = hoverText[4];
})