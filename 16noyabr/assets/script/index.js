let department = document.querySelector(".header")
let ul = document.querySelector("ul")
let arrow = document.querySelector(".fa-chevron-down")

department.addEventListener("click",function () {
    ul.classList.toggle("active")
    arrow.classList.add("rotate")
    arrow.style.transform = 'rotate(270deg)';
    // arrow.style.display="none"
    // arrow.style.
    // console.log(arrow)
    
    
})

