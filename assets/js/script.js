// JavaScript for Sidebar Menu

const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const sidebar = document.querySelector(".sidebar")
const overlay = document.getElementById("body-overlay")


menuOpen.addEventListener("click", function(){
    sidebar.classList.add("active")
    overlay.classList.add("active")
})

menuClose.addEventListener("click", function(){
    sidebar.classList.remove("active")
    overlay.classList.remove("active")
})