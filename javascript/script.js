const programming = document.getElementById("programming")
const graphical = document.getElementById("graphical")
const programming_content = document.getElementById("programming_content")
const graphical_content = document.getElementById("graphical_content")

if (programming) {
    programming.addEventListener('click',() =>{
        programming.classList.add("active")
        graphical.classList.remove("active")

        programming_content.classList.remove("hide")
        graphical_content.classList.add("hide")
    })
}

if (graphical){
    graphical.addEventListener('click',() =>{
        programming.classList.remove("active")
        graphical.classList.add("active")

        programming_content.classList.add("hide")
        graphical_content.classList.remove("hide")
    })
}