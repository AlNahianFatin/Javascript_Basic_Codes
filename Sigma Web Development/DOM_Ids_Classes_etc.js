console.log("Let's Start!")

let boxes = document.getElementsByClassName("Box")
console.log(boxes)

boxes[2].style.backgroundColor = "red";
boxes[2].style.color = "whiteSmoke";
boxes[2].style.textAlign = "center";

document.getElementById("selectBox").style.backgroundColor = "aqua"
document.querySelector(".Box").style.backgroundColor = "white" //will only select the first element that has class "Box"
console.log(document.querySelectorAll(".Box")) //returns a list of elements
// document.querySelectorAll(".Box").style.backgroundColor = "pink" //will  not be accessible through this approach

document.querySelectorAll(".Box").forEach(e =>{
    console.log(e)
    e.style.textAlign = "center";
})

let boxElements = document.querySelectorAll(".Box");
for (let i = 0; i < boxElements.length; i++) {
    console.log(boxElements[i]);
    boxElements[i].style.width = "100px"
}
document.getElementById("selectBox").style.backgroundColor = "aqua"

console.log(document.getElementsByTagName("div"))

e = document.getElementsByTagName("div")
console.log(e[3].matches("#selectBox")) //directly matches and returns boolean if this element matches with id selectBox
console.log(e[4].matches("#selectBox"))
console.log(e[3].closest("#selectBox")) //matches and returns itself or the nearest ancestors that matches with id selectBox - returns null as no such ancestor exixts
console.log(e[4].closest(".container")) //matches and returns itself or the nearest ancestors that matches with class exampleDom
console.log(e[4].closest("html"))
console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector("html").contains(e[2]))
console.log(document.querySelector("#selectBox").contains(e[2]))
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //body tag doesn't contain class container
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //body tag contains class container