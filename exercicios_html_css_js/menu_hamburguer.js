let box = document.querySelector(".box")
let navmenu = document.querySelector(".nav-menu")
let animation = () => {
    if (box.classList.contains("animationX")){
        box.classList.remove("animationX")
        navmenu.classList.remove("exibir")
    } else {
        box.classList.add("animationX")
        navmenu.classList.add("exibir")
    }
}
box.addEventListener("click",animation)