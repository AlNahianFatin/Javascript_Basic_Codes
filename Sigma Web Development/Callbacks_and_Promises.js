console.log("Fatin is a hacker");

setTimeout(() => { //As javascript is asynchronous in nature, this setTimeout method will get executed later
    console.log("I am inside 2seconds setTimeout");
}, 2000);

setTimeout(() => { //Even this has 0 delay, still it will be executed later, though before previous setTimeout because of 2 seconds delay
    console.log("I have 0 delay");
}, 0);

setTimeout(() => { //Even this has 0 delay, still it will be executed later, though before previous setTimeout because of 2 seconds delay
    console.log("I have 0 delay 2");
}, 0);

console.log("The End");

//callback funtion
const fn = () => { //this is called arrow function
    console.log("Printing from 2nd callback function");
}
function callback(arg, fn) { //this is regular function declaration
    console.log(arg);
    fn(); //from here, js interpreter will go to fn function without fully executing this function
    console.log("Just testing 1st callback remaining codes")
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Printing from 1st callback function", fn); //from here, js interpreter will go to callback function without fully executing this function
    document.head.append(sc);
    console.log("Adding a prism script, but not important for now!")
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//promise - promise of code execution
let prom1 = new Promise((resolve, reject) => {
    let r = 0.8
    if (r < 0.5)
        reject("Random number 1 not supported")
    else {
        setTimeout(() => {
            // console.log("Congrats!\nRandom number 1 supported!");
            resolve("Finally!")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    r = 0.8
    if (r < 0.5)
        reject("Promise 2 rejected")
    else {
        setTimeout(() => {
            // console.log("Promise 2 accepted");
            resolve("Finally 2!")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((e) => { //without this catch, there would have shown error message directly in console
    console.log(e);
}) 

let prom3 = Promise.allSettled([prom1, prom2])
prom3.then((a) => { //doesn't matter if resolved or rejected, it would always show status and value/reason
    console.log(a)
}).catch(e => {
    console.log(e) 
})
let prom4 = Promise.all([prom1, prom2]) 
prom4.then((a) => { //if all the promises are resolved, only then "then" condition would get executed with resolve values. 
    console.log(a)
}).catch(e => { //if any of the promises are rejected, then "catch" condition would get executed for that particular promise with rejected values and all the other resolveds would get ignored
    console.log(e) 
})
let prom5 = Promise.race([prom1, prom2]) //whichever promise resolves/rejects first, will only get result of that one
prom5.then((a) => { 
    console.log(a)
}).catch(e => { 
    console.log(e) 
})
let prom6 = Promise.any([prom1, prom2]) //whichever promise gets resolved first, will only get result of that one and if all promises get rejected, it will show - AggregateError: All promises were rejected
prom6.then((a) => { 
    console.log(a)
}).catch(e => { 
    console.log(e) 
})
let prom7 = Promise.resolve("new promise resolved") //creates a promise that is already fulfilled with the value you give it.  
                                            //Equivalent to: new Promise((resolve) => resolve(value));
                                            //Example: Promise.resolve("Done").then(console.log);                           Output: Done
prom7.then((a) => { 
    console.log(a)
}).catch(e => { 
    console.log(e) 
})
let prom8 = Promise.reject("new promise rejected"); //Creates a promise that is already rejected with the reason (error message) you give it.
                                            //Equivalent to: new Promise((_, reject) => reject(reason));
                                            //Example: Promise.reject("Something went wrong").catch(console.error);        Output: Something went wrong
prom8.then((a) => { 
    console.log(a)
}).catch(e => { 
    console.log(e) 
})