let btn = document.getElementById("btn")
btn.addEventListener("click", () => { // if click event is done, the following function is automatically called
    console.log("I was triggered!");
    document.querySelectorAll(".box")[0].innerHTML = "Why have you clicked me?";
})
btn.addEventListener("dblclick", () => {
    navigator.clipboard.readText() //reads last copied text from clipboard and adds to the innerHTML text of the class box 
        .then(
            (clipText) => (document.querySelector(".box").innerHTML += " Copied text from clipboard: " + clipText),
        );
})
btn.addEventListener("contextmenu", () => {
    alert("Don't try to hack this button by right clicking!")
})
btn.addEventListener("keydown", (e) => {
    console.log(e); //keydown action listener will only get triggered once this button is clicked and focus has not shifted to any where else
})
document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log("Key pressed: ", e.key, "\nKey value: ", e.keyCode); //keydown action listener will now get triggered once this page is on focus has not shifted to any where else
    console.log("'alt' key activated :", e.altKey);
})
document.querySelector(".box").addEventListener("click", () => {
    alert("box was clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation() //if bubbling is to be stopped after this!!!!
    alert("childContainer was clicked")
})
document.querySelector(".container").addEventListener("click", () => {
    alert("container was clicked")
}) //bubbling - like bubbles rise upwards from down gradullay,
//whenever chil div with class "box" is triggered (in this case, by 
// click event),parent section with class "childContainer" and 
// grandparent "container" is also triggered

let a = setInterval(() => {
    document.querySelectorAll(".childContainer").forEach(e => {
        r = Math.ceil(0 + Math.random() * 256) //formula: min + Math.random() * (max - min + 1) for generating random numbers between min ~ max and Math.ceil performs ceiling operation (next nearest integer) to the floating result
        g = Math.ceil(0 + Math.random() * 256)
        b = Math.ceil(0 + Math.random() * 256)
        e.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    });
}, 1000); //this function is called automatically every 3,000 milliseconds
setTimeout(() => {
    clearInterval(a) //setInterval() stops getting automatically called
}, 5000); //after 5,000 milliseconds from loading the page, this function's 
//codes are executed