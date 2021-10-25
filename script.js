const toggle_section = document.querySelector(".toggle-section");
const toggle_btn = document.getElementById("toggle");
const toggle_btn2 = document.getElementById("toggle2");

toggle_btn.addEventListener("click",function(){
    toggle_section.classList.add("show");
    toggle_btn.classList.remove("show");
    toggle_btn2.classList.add("show");
    toggle_btn2.addEventListener("click",function(){
        toggle_section.classList.remove("show");
        toggle_btn.classList.add("show");
        toggle_btn2.classList.remove("show");
    })
})