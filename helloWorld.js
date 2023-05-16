// camelCase -- JavaScript: helloWorld, numGen, isTrue
// snake_case -- Python: hello_world, num_gen, is_true
// kebab-case -- HTML & CSS: hello-world, num-gen, is-true

console.log("Hello World!")

let pet = "Cat"
let petName = "Tigger"
let petAge = 2
let petColor = "Orange"
let isCute = true

console.log(`I have a pet ${pet}.`)
console.log(`His name is ${petName} and he is ${petAge} years old.`)
console.log(`He looks like a tiger with his cute ${petColor} coat.`)

let username = "Lukas Withakay"
console.log(`Good morning, ${username}`)

username = "Luke Skywalker"

console.log(`${username} I am your father`)

let number = 25
console.log(number)

// number = number + 5
// number -= 5
console.log(number + 5)
console.log(number)

console.log(username + number)
console.log('===================')

console.log(typeof 5)
console.log(typeof (5 + ""))

// console.log('b' + 'a' + + 'a' + 'a')
// console.log(+'7')
// isCute = number < 10

// console.log(number > 10)
console.log(isCute)


console.log(25 + "5")

if(isCute === true){
    console.log("I love my pet!")
} else {
    console.log("I still love my pet!")
}


let temperature = 25

if(temperature < 50){
    console.log("It's freezing out there!")
} else if (temperature < 75){
    console.log("The weather is mild.")
} else {
    console.log("It's a warm day!")
}


console.log("Pushing to github is fun!")