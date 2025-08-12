//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

//Promise
function retreiveData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Successfully retreived data from server")
        }, 1500);
    })
}
console.log("Simulating Promise - ")
console.log("Greeting user...")
console.log("Loading data from server...")
let data = retreiveData() //will receive promise as return value
console.log(data) 
data.then((a) => {
    console.log("Processing data...")
    console.log("Showing result")
})

//Async/Await
async function retreiveData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Successfully retreived data from server")
        }, 1500);
    })
}
async function main() {
    console.log("\nSimulating Await/Async - ")
    console.log("Greeting user...")
    console.log("Loading data from server...")
    let data = await retreiveData2() //will receive resolve value as return value
    console.log(data)
    console.log("Processing data...")
    console.log("Showing result")
}
setTimeout(() => {
    main()
}, 2000);

//Fetch API
async function retreiveData3() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //will receive response as return type from RestAPI from dummy API from jsonPlaceHolder
    console.log(x) 
    let data1 = await x.json() //will convert the response to object
    // let data2 = await x.text() //will convert the response to text (string)
    // console.log(data2)
    return data1
}
async function main2() {
    console.log("\nSimulating Fetch API - ")
    console.log("Greeting user...")
    console.log("Loading data from server...")
    let data = await retreiveData3() //not awaiting would only return the promise...not the actual data
    console.log(data)
    console.log("Processing data...")
    console.log("Showing result")
}
setTimeout(() => {
    main2()
}, 4000);

//fetch API with GET/POST/PUT requests - direct from internet
async function postData(url = "", data = {}) { //collected from fetch api post request
  const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
postData("https://jsonplaceholder.typicode.com/posts", { answer: 42 }).then((data) => {
    console.log(data);
})

//fetch API with POST request in previous formats
async function retreiveData4() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        body: JSON.stringify( {
            title: 'foo',
            body: 'bar', 
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data1 = await x.json() 
    return data1
}
async function main3() {
    console.log("\nSimulating Fetch API with previous format - ")
    console.log("Greeting user...")
    console.log("Loading data from server...")
    let data = await retreiveData4()
    console.log(data)
    console.log("Processing data...")
    console.log("Showing result")
}
setTimeout(() => {
    main3()
}, 6000);