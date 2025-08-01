console.log(document.title)
console.log(document.body) //because of line 3, inline CSS has been added in this line's output
document.body.style.backgroundColor = "whitesmoke"
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.children)
console.log(document.body.children[0])
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.childElementCount)
console.log(document.body.hasChildNodes())
console.log(document.body.lastChild)
console.log(document.body.lastElementChild)
console.log(document.body.parentNode)
console.log(document.body.parentElement)
console.log(document.body.previousSibling)
console.log(document.body.previousElementSibling)



console.log("\n\n\n\n" + document.body.firstElementChild.childElementCount)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].firstChild)
console.log(document.body.childNodes[1].firstElementChild)
console.log(document.body.childNodes[1].lastChild)
console.log(document.body.childNodes[1].lastElementChild) //because of next line, inline CSS has been added in this line's output
document.body.childNodes[1].lastElementChild.style.backgroundColor = "green"
console.log(document.body.childNodes[1].lastElementChild.parentElement)
console.log(document.body.childNodes[1].lastElementChild.previousElementSibling)
console.log(document.head)
console.log(document.head.children)


document.body.childNodes.forEach((node, index) => {
  console.log(index, node.nodeType, node.nodeName);
});
/*The reason why the last comment and text nodes won't be showing in the browser console
is that -

Script Placement Matters:
Your script is placed before the final comment (<!-- hi -->) in the <body>.
When the script runs, the browser has not yet parsed that final comment node.
So, document.body.childNodes only includes nodes up to the script tag.

DOM Parsing Is Sequential:
Browsers parse HTML top to bottom.
If a script runs before the entire DOM is parsed, it will only "see" what has been parsed so far.*/

console.log("\n\n\n")

window.addEventListener('DOMContentLoaded', () => {
  document.body.childNodes.forEach((node, index) => {
    console.log(index, node.nodeType, node.nodeName);
  });
});