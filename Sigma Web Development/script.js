console.log("Welcome to my page")

var name = prompt("Enter your name : ")
console.log("Hello,", name, "!")

var blasted = confirm("Are you sure to leave this page and blast your device?")
blasted ? console.log("Boom! Your device is now cooked!") : console.log("Smart choice!")
console.log("\nThe variable blasted for the confirmation message is of :", typeof blasted)
console.log("Data type of blasted printed with typeof as function :", typeof(blasted))

document.title = "Sigma Web Development by Code With Harry practices starting from video 54"
document.body.style.backgroundColor = "#C82909" //automatically adds inline css into the body tag
console.log(document.body)


//---------- Difference between const, let & var --------
const a = 5;
// console.log("const variable, a =", a += 4) //run-time error in browser : Assignment to constant variable
console.log("\nconst variable, a =", a)

// let a = 5 //let is global, function and block scoped and can not have a variable with same name be redeclared
let b = 6 //b = 6 would have by default set b as let accessibility 
console.log("let variable, b =", b += 5) //reassignment is possible

var c = 7
console.log("var variable, c =", c += 6) //reassignment is possible

var d = 8
console.log("var variable, d =", d)

let e = 9
console.log("let variable, e =", e)

var f = 10
console.log("var variable, f =", f)

let g = 10
console.log("let variable, g =", g)

{
    let a = 55
    b = 66
    var c = 77
    d = 88
    let e = 99
    let f = 100
    // var g = 100 //can't redeclare a let variable as var --> build-time error in IDE : Cannot redeclare block-scoped variable 'g'

    console.log("\nlet variable, a (redeclared as let) inside block =", a) //another variable named a, only available within this block, is assigned as 55
    console.log("let variable, b (reassigned) inside block =", b)
    console.log("var variable, c (redeclared) inside block =", c) //another var variable named c, only available within this block, is assigned as 77
    console.log("var variable, d (reassigned) inside block =", d)
    console.log("let variable, e (within this scope/block only) inside block =", e) //another let variable named e, only available within this block, is assigned as 99
    console.log("let variable, f (within this scope/block only) inside block =", f) 
    console.log("let variable, g (within this scope/block only) inside block =", g) 
}
console.log("\nconst variable, a outside block =", a)
console.log("reassigned let variable, b outside block =", b) //reassigned let value is accessible globally from anywhere
console.log("redeclared var variable, c outside block =", c) //redeclared var value is accessible globally from anywhere
console.log("reassigned var variable, d outside block =", d) //reassigned var global value is accessible from anywhere
console.log("redeclared let variable, e outside block =", e) //redeclared let value is only accessible inside the block, so global value is accessed here
console.log("redeclared let variable, f outside block =", f) //redeclared let value is only accessible inside the block, so global var value is accessed here
//So, var variables are mutable/changeable in such a way that they are changed independent of blocks, meaning once they are changed inside/outside a block of code (not function),
    //they are changed globally for the next line of codes and commands
console.log("\n")
// Using var
if (true) {
  var num1 = 10;  // function-scoped or global-scoped
}
console.log(num1); // 10 (accessible outside the if block)
function h () { var num4 = 40 }
h()
// console.log(num4) // function-scoped, so Error: b is not defined (not accessible outside function)
// Using let
if (true) {
  let num2 = 20;  // block-scoped
}
// console.log(num2); // Error: b is not defined (not accessible outside block)
// Using const
if (true) {
  const num3 = 30; // block-scoped
}
// console.log(num3); // Error: c is not defined (not accessible outside block)

/*var is hoisted to the top of its scope and initialized with undefined.
let and const are hoisted but remain in a "temporal dead zone" until the declaration line is reached, so using them before declaration causes an error.*/
console.log("\n"+ q);  // undefined (no error)
var q = 5;
console.log(q);  // 5
// console.log(w);  // ReferenceError
let w = 10;
console.log(w);
// console.log(r);  // ReferenceError
const r = 20;
console.log(r);

v1 = undefined
v2 = null
console.log("\nVariables: v1 ->", v1, "v2 ->", v2)
console.log("v1 data type:", typeof v1, "and v2 data type:", typeof v2, "\n") //undefined has no data type, so it has data type undefined. 
    // And null was initialized as object from the very beginning of JS and correcting it would require changing many functionalities till now. So it hasn't been changed yet