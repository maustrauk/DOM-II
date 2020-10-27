// Your code goes here
let body = document.querySelector("body");
let header_nav = body.querySelector(".main-navigation");
let container = body.querySelector(".container home");
let footer = body.querySelector(".footer");
let logo_h1 = document.querySelector(".logo-heading");
let intro = document.querySelector(".intro");
let nav_links = document.querySelectorAll(".nav-link");

let busButton = document.createElement("button");
busButton.textContent = "Click on IT!";
let inputText = document.createElement("input");
inputText.type = "text";

//1
body.addEventListener('wheel', () =>{ 
    body.style.background = "#f9affa";
    header_nav.style.background = "#f9affa";
});

//2
logo_h1.addEventListener('mouseover', () => intro.appendChild(busButton));

//3
busButton.addEventListener('click', (event) => {
    event.target.style.background = "red";
    intro.appendChild(inputText);
});

nav_links.forEach(nav_link => {
    //4
    nav_link.addEventListener('mouseenter', () => nav_link.style.color = "green");
    //5
    nav_link.addEventListener('mouseleave', () => nav_link.style.color = "blue");
});

//6
document.addEventListener('keydown', () => footer.style.background = "yellow");

//7
inputText.addEventListener('focus', (event) => event.target.style.background = "#cdf7f5");

//8
inputText.addEventListener('blur', (event) => event.target.style.background = "#00948d");

//9
document.addEventListener('copy', () => footer.style.background = "black");

//10
document.addEventListener('paste', () => footer.style.background = "wight");