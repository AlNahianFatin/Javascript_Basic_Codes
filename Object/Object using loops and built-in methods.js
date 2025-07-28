const book = {
    name: "Deyal",
    author: 'Humayun Ahmed',
    price: 400
}
console.log(Object.keys(book))
console.log(Object.values(book))

const article = {
    title: "Learning JS",
    category: "Programming"
}
console.log(Object.keys(article).includes('author'))

const laptop = {
    brand: "Dell",
    model: "inspiron",
    price: 4500
}
for(const key in laptop) //for in gives key values
    console.log(key, laptop[key]) //for in gets keys from laptop and iterates

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
for (const key of Object.keys(phone)) //for of gives actual values
    console.log(key, phone[key]) //for of gets keys from Object.keys(phone) and iterates

const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike))

const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}
for (key in books)
    console.log(books[key])

const numbers = {
    a: 10, 
    b: 20, 
    c: 30, 
    d: 40
}
let sum = 0
for (const key in numbers)
    sum += numbers[key]
console.log(sum)

const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(player))

const building = {
    floors: 10,
    address: {
        street: 'Main Road',
        city: 'Dhaka'
    },
    type: 'Commercial'
}
for(const key in building)
    console.log(key, building[key])
