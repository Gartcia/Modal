const close = document.querySelector(".close-btn");
const open = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay")

open.addEventListener("click", function(){
    modal.style.visibility = "visible";
    modal.style.zIndex = 10;
})
close.addEventListener("click", function(){
    modal.style.visibility = "hidden";
    modal.style.zIndex = -10;
})