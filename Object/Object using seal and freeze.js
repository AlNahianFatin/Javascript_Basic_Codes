const headphone = {
    brand: "Sony",
    price: 3000, 
    color: "red"
}
Object.freeze(headphone)
headphone.model = "Expedition"
console.log(headphone)

const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player)
player.birth = 1987
console.log(player)

const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
}
Object.seal(book)
book.author = "Al Nahian Fatin"
console.log(book)

const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price
console.log(gadget)

const animal = {
    name: 'Tiger',
    location: 'Sundarban',
}
Object.freeze(animal)
animal.location = 'Africa'
console.log(animal)

const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
}
Object.seal(food)
food.vat = 5
food.price = 550
console.log(food)