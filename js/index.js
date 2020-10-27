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

//1
body.addEventListener('wheel', () =>{ 
    body.style.background = "#f9affa";
    header_nav.style.background = "#f9affa";
});

//2
logo_h1.addEventListener('mouseover', () => intro.appendChild(busButton));

//3
busButton.addEventListener('click', (element) => element.target.style.background = "red");

nav_links.forEach(nav_link => {
    //4
    nav_link.addEventListener('mouseenter', () => nav_link.style.color = "green");
    //5
    nav_link.addEventListener('mouseleave', () => nav_link.style.color = "blue");
});

//6
document.addEventListener('keydown', () => footer.style.background = "yellow");