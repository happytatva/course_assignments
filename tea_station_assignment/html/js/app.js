const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// ---for show navbar---
navBtn.addEventListener("click", () =>{
     navBar.classList.add("show-nav");
});

// ---for close navbar---
navClose.addEventListener("click", () =>{
     navBar.classList.remove("show-nav");
});
