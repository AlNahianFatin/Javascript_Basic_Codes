// console.log("Hello World and Good evening!");
//  let sugar = parseInt('1.2222');
//  console.log(sugar);

// console.log(parseFloat('1.0000002'));

// const input = "x20";
// let input1 = 'asdfsdfsd'
// console.log(parseInt("x20"))

// let age1 = parseInt('abcd')
// let weight = parseInt('twenty')
// console.log(age1, weight, sugar, input, input1)

// ageInt  = parseInt('50f')
// weight = parseInt('92twenty')
// weight1 = parseInt('93twenty5')
// weight2 = parseInt('94twenty5one11')
// const address = parseInt('tom60')
// console.log(ageInt, weight, weight1, weight2, address)

// console.log((12.12345 + 523.23545).toFixed(3))

// console.log("10" == '10')
// console.log("10" === '10')
// console.log("string 10 is " + typeof("10"))
// console.log("character 10 is " + typeof('10'))

// console.log("abc" == "ABC")
// console.log("abc" === "ABC")

// const a = "abc";
// const b = 'abc';
// console.log(a == b)
// console.log("string a is " + typeof(a))
// console.log(a[0])
// console.log(a === b)
// console.log("character b is " + typeof(b))
// console.log(b[0])

// const aa = 12;
// console.log("aa is " + typeof(aa))
// const aaa = 12.23;
// console.log("aaa is " + typeof(aaa))

// const x = "hello";
// console.log("x is " + typeof(x))
// console.log(x == "hello")
// console.log(x === "hello")

// let cxcs
// console.log(cxcs)

// console.log(typeof(null))
// console.log(typeof(undefined))
// console.log(typeof([]))
// console.log(typeof(string))
// console.log(typeof(console))
// console.log(typeof(log))
// console.log(typeof(hello))

// const age2 = 20;
// age2 >= 18 ? console.log("You can vote") : console.log("You aren't eligible")

// let price = 500;
// let isLeader = "true";
// price = isLeader == true ? 0 : price + 100;
// console.log(price)
// price = isLeader === true ? 0 : price + 100;
// console.log(price)
// isLeader = "true";
// price = isLeader == 'true' ? 0 : price + 100;
// console.log(price)

// const mixedArray = [12, "Dim", true, 45.566]
// console.log(mixedArray)
// console.log(mixedArray.length)

// const num = [12, 87, 45]
// console.log(num.push(63, 17))
// num.push(745, 39)
// console.log(num)
// const numpush = num.push(32)
// console.log(numpush)
// console.log(num.pop())
// console.log(num.pop(5474567)) //anything can be written in the pop bracket here but javascript will just ignore them and simply pop the last element from the array
// console.log(num)

// const num1 = [12, 87, 45]
// num1[0] = 23 //const in JavaScript prevents reassignment, not mutation. num holds a reference to the array in memory. const means you cannot change that reference, but you can change what's inside the object (in this case, the array).
// console.log(num1)

// const num2 = [1, 34, 52, 44]
// num2.shift()
// console.log(num2)
// console.log(num2.shift())

// const teachers = ['Assistant sir', 'Class sir']
// teachers.unshift(null)
// teachers.unshift()
// teachers.unshift("")
// console.log(teachers)
// teachers.shift('null')
// teachers.shift(32)
// console.log(teachers)
// teachers.unshift('Head sir')
// console.log(teachers)
// console.log(teachers.unshift('Division Education Officer', 'District Education Officer'))
// console.log(teachers)

// const num3 = [1, 2, 3, 4, 5, 7]
// if (num3.indexOf(2) >= 0)
//     console.log("2 exists at index " + num3.indexOf(2))
// else
//     console.log("2 doesn't exist")
// console.log("6 doesn't exist as its index is at " + num3.indexOf(6))

// const numbers = [12, 98, 45]
// for(const num of numbers)
//     console.log(this.num)

// let num4 = 0
// while (num4 < numbers.length) {
//     console.log(numbers[num4])
//     num4++
// }

// for(num5 = 0; num5 < numbers.length; num5++)
//     console.log(numbers[num5])

// sum = 354;
// console.log(sum)
// sum = 12;
// console.log(sum)

// for(i = 0; i < 7; i++)
// {
//     console.log("Hi - " + i)
//     if(i > 3)
//         break
//     console.log(i)
// }
// console.log("Printing done")

// for(i = 0; i < 7; i++)
// {
//     console.log("Hi - " + i)
//     if(i >= 3 && i <= 5)
//         continue
//     console.log(i)
// }
// console.log("Printing done")

// const person =
// {
//     name: 'Moga Uddin',
//     age: 25.00000000000001,
//     married: true,
//     'fav places': ['Bandarban', 'Saint Martin', 'Kuakata']
// }
// person.married = false
// person['married'] = true
// // console.log(person[married]) //syntax error
// console.log(person['married'])
// console.log(person.age)
// person['fav places'].push('Inani Beach')
// console.log(person['fav places'])
// propertyName = 'married'
// console.log(person[propertyName])

// const college =
// {
//     name: 'vnc',
//     class: [11, '12'],
//     events: ['science fair', 'bijoy dibos'],
//     unique:
//     {
//         color: 'blue',
//         result:
//         {
//             gpa: 5,
//             merit: 'top'
//         },
//         location: 'dhaka',
//     }
// }
// console.log(college.class[0])
// console.log(college.class[1])
// console.log(college.unique.color)
// console.log(college.unique)
// console.log(college.unique.result)
// console.log(college.unique.result.gpa)
// console.log(college.events)
// console.log(college.events[1])
// console.log(Object.keys(college))
// console.log(Object.keys(college['unique']))
// console.log(Object.keys(college.unique.result))
// console.log(Object.values(college))
// console.log(Object.values(college['unique']))
// console.log(Object.values(college.unique.result))
// console.log(Object.keys(college.unique).includes('color'))
// console.log(Object.keys(college.unique.result).includes('year'))
// if("result" in  college.unique)
//     console.log("result exists in college - unique")
// else
//     console.log("No result")

// if('merit' in  college.unique.result)
//     console.log("merit exists in college - unique - result")
// else
//     console.log("No merit \nnot meritorious")

// if(college.unique.hasOwnProperty('result'))
//     console.log('college has unique result')
// else 
//     console.log("result error 404")

// if(college.unique.hasOwnProperty('events'))
//     console.log('college organizes unique events')
// else 
//     console.log("no unique event \nboring college")

// if(college.unique.hasOwnProperty('merit'))
//     console.log('college has unique merits')
// else 
//     console.log("No merit \nnot meritorious")
// const entries = Object.entries(college)
// console.log(entries)
// console.log(Object.entries(college['unique']))
// console.log(Object.entries(college.unique.result))
// for (const key in college)
//     console.log(key, college[key])
// for (const key in college['unique']) {
//     console.log(key, college['unique'][key])
//     console.log(key, college.unique[key])
// }
// for (const key in college.unique.result)
//     console.log(key, college.unique.result[key])
// keys = Object.keys(college)
// for (const key of keys)
//     console.log(key, college[key])

// const person1 = {name: "Alice", age: 25, country: "Bangladesh"}
// delete person1.age //successfully deleted age
// console.log(person1)
// Object.freeze(person1) //freezing person1 - no deleting, no modifying, no adding property
// delete person1.name //attempt to delete name
// person1.country = 'USA' //attempt to modify country
// person1.num = '01234567890' //attempt to add num
// console.log(person1)
// Object.seal(person1) //attempt to seal but won't work, as already freezed
// delete person1.name 
// person1.country = 'USA'
// person1.num = '01234567890'
// console.log(person1)

// const person2 = {name: "Abul", age: 17, country: "Bangladesh"}
// console.log(person2)
// Object.seal(person2) //sealing person2 - no deleting, no adding property
// delete person2.name //attempt to delete name
// person2.country = 'USA' //modifying country
// person2.num = '01234567890' //attempt to add num
// console.log(person2)
// Object.freeze(person2) //freezing person2 - no deleting, no modifying, no adding property
// delete person2.name //attempt to delete name
// person2.country = 'uganda' //attempt to modify country
// person2.num = '01234567890' //attempt to add num
// console.log(person2)

// function calculatePower(num1, num2) {
//     console.log('power of ' + num1 + ' with' , num2 , 'is ' + num1 ** num2);
//     console.log('power of', num2, 'with', num1, 'is', Math.pow(num2, num1));
//     return true
// }
// calculatePower(5, -2) ? console.log("calulation done") : console.log("stupid function can't calculate")

// try {
//     throw new Error("Something went wrong!");
// }
// catch (e) {
//     console.error("❌ Error caught:", e.message);
// }

// let age = -1;
// age < 0 ? console.warn("⚠️ Age should not be negative!") : console.log("All ok")

// console.info("ℹ️ User data loaded successfully.");

// let user = { name: "Bob", age: 25 };
// console.table(user)

// let users = [
//     { name: "Alice", age: 25 },
//     { name: 'Bob', age: 30 },
// ];
// console.table(users);

// let debugData = { step: "validation", success: true };
// console.debug("🔍 Debug Info:", debugData);

// function add (a, c, b){
//     return a + c
// }
// console.log(add(5, 8))

// function add1 (a, b){
//     console.log(arguments)
//     return a + b
// }
// console.log(add1(5, 8, 9, 6))

// function add2 (a, b){
//     sum = 0
//     for (const num of arguments)
//         sum += num
//     return sum
// }
// console.log(add2(5, 8, 9, 6))

// function add3 (a, b){
//     sum = 0
//     for (const num in arguments)
//         sum += arguments[num]
//     return sum
// }
// console.log(add3(5, 8, 9, 6))

// function add4 (a, b){
//     sum = 0
//     for (const num in arguments)
//         sum += num //string concatenation - '0' + '0' + '1' + '2' + '3' 
//     return sum
// }
// console.log(add4(5, 8, 9, 6))

// const arr = [1, 2];
// arr.extra = 99;
// arr[3] = 5
// for (const key in arr) {
//   console.log(key);  // Logs "0", "1", "3" and "extra"
//   console.log(arr[key]); 
// }
// for (const value of arr) {
//   console.log(value);  // Only logs 1, 2 and 5; ignoring 2nd index value as undefined
// }

// const parent = {inheritedProp: 42};
// const child = Object.create(parent);
// child.ownProp = 'hello';
// for (const key in child) {
//   console.log(key);  // Logs "ownProp" and "inheritedProp"
// }

// function isEven(num){
//     return (num % 2 === 0) ? true : false
// }
// console.log(isEven(5))
// console.log(isEven(18))

// function stringLength(string){
//     return string.length
// }
// console.log(stringLength('Fatin03'))

// function returnModulas(num){
//     return (num >= 0) ? num : -num
// }
// console.log(returnModulas(5))
// console.log(returnModulas(0))
// console.log(returnModulas(-17))

// function doubleOrTriple(num, doDouble){
//     return (doDouble) ? num * 2 : num * 3
// }
// console.log(doubleOrTriple(5, true))
// console.log(doubleOrTriple(5, false))

// function numberOfArray (nums){
//     return (nums.length >= 7) ? 'array too long (' + nums.length + ') : ' + nums : 'array too short (' + nums.length + ') : ' + nums 
// }
// console.log(numberOfArray([12, 0., 5.18, 12.85000074, 'fatin', 'al', 'nahian', 'long']))
// console.log(numberOfArray([12, 0., 5.18, 12.85000074, 'short']))

// var name = "aiub"
// console.log(name) 
// var name = "buet"
// console.log(name) 

// let num1 = 12345678901234561 //last 1 is converted as 0
// console.log(num1)
// let num2 = 0.12345678901234567 //last 7 is converted to 6
// console.log(num2)
// let num3 = 1234567890.1234563 //last 3 is converted to 2
// console.log(num3)

// var x = 0.2 + 0.1; //x will be 0.30000000000000004
// console.log(x);
// var x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
// console.log(x);

// var name= 'My name is "Jon"'; //My name is "Jon"
// console.log(name);
// var name= "My name is 'Jon'"; //My name is 'Jon'
// console.log(name);

// var a = null; //this one is null
// console.log(a);
// var b; //this one is undefined
// console.log(b);
// var c = undefined; //this one is undefined explicitly
// console.log(c);

// var x = "0";
// var text;
// switch(x) {
//     case 0: //though the values are the same, switch cases compare strictly (using operator ===), so output is false
//         text = "number 0";
//         break;
//     case "":
//         text = "string with no value"
//         break;
//     case '0':
//         text = "string 0";
//         break;
//     default:
//         text = false;
// }
// text ? console.log("x is a", text) : console.log("x is not identified");

// var x1;
// console.log(x1);
// console.log(typeof x1);
// console.log(typeof(x1));
// var x2 = "";
// console.log(x2); //empty string is stored and will be printed
// console.log(typeof x2);

// var cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// console.log(typeof cars);

// var cars2 = new Array("Mitsubishi", "Ferrari", "Porshe");
// console.log(cars2)

// //creating unordered list using for loop in document
// var fruits, text, fLen, i;
// fruits = ["Banana", "Orange", "Apple", "Mango"];
// fLen = fruits.length;
// text = "<ul>";
// for (i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;

// //creating unordered list using foreach loop in document
// function myFunction(value) {
//     text += "<li>" + value + "</li>";
// }
// text = "<ul>";
// cars2.forEach(myFunction);
// text += "</ul>";
// document.getElementById("demo2").innerHTML = text;

// //using js method toString() to convert values of an array to a string of coma separated array values
// document.getElementById("demo3").innerHTML = fruits.toString();

// //using js method join()  to join values of an array into a string with customizations of the array values
// document.getElementById("demo4").innerHTML = fruits.join(" & ");

// //using pop() in array
// fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("Fruits before popping:", fruits)
// console.log("Returning the popped value as string:", fruits.pop())
// console.log("Fruits after popping:", fruits)

// //using push() in array
// console.log("\nFruits before pushing:", fruits)
// console.log("Returning the length of array after pushing:", fruits.push("Kiwi"))
// console.log("Fruits after pushing:", fruits)
// console.log("Returning the length of array after pushing same value again:", fruits.push("Kiwi"))
// console.log("Fruits after pushing same value again:", fruits)

// var x = 15 * 5;
// debugger; //debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function
// document.getElementById("demo").innerHTML = x;

function multiply(a, b) {
  debugger; // pause here! When the JS interpreter encounters debugger; while running code and you have developer tools (DevTools) open in your browser, execution will pause right there.
  let result = a * b;
  return result;
}
console.log(multiply(5, "10"));