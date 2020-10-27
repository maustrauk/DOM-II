// Your code goes here
let body = document.querySelector("body");
let header_nav = body.querySelector(".main-navigation");
let container = body.querySelector(".container home");
let footer = body.querySelector(".footer");

let busButton = document.createElement("button");
busButton.textContent = "Click on IT!";

//1
body.addEventListener('wheel', () =>{ 
    body.style.background = "#f9affa";
    header_nav.style.background = "#f9affa";
});

//2
