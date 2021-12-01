window.addEventListener("load", main)
function main() {
    eventListeners()
}

function eventListeners() {
    const button1 = document.querySelector("#experienceButton")
    button1.addEventListener("click", expandDiv1)
    const button2 = document.querySelector("#aboutMeButton")
    button2.addEventListener("click", expandDiv2)
    const button3 = document.querySelector("portfolioButton")
    button3.addEventListener("click", expandDiv3)
}

function expandDiv1() {
    const div1 = document.querySelector("#experience")
    const div2 = document.querySelector("#aboutMe")
    const div3 = document.querySelector("#portfolio")
    div1.classList.replace("hidden", "flex")
    div2.classList.replace("flex", "hidden")
    div3.classList.replace("flex", "hidden")
}

function expandDiv2() {
    const div1 = document.querySelector("#experience")
    const div2 = document.querySelector("#aboutMe")
    const div3 = document.querySelector("#portfolio")
    div2.classList.replace("hidden", "flex")
    div1.classList.replace("flex", "hidden")
    div3.classList.replace("flex", "hidden")
}

function expandDiv3() {
    const div1 = document.querySelector("#experience")
    const div2 = document.querySelector("#aboutMe")
    const div3 = document.querySelector("#portfolio")
    div3.classList.replace("hidden", "flex")
    div1.classList.replace("flex", "hidden")
    div2.classList.replace("flex", "hidden")
}