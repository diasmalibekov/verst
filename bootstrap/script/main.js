<<<<<<< HEAD
//////////////var name = 'Diar';
//////////////
//////////////if (name === 'Dias') {
//////////////    console.log('Dias')
//////////////} else if (name === 'Diaz') {
//////////////    console.log('Diaz')
//////////////} else {
//////////////    console.log(name)
//////////////}
//////////////
//////////////console.log(true && false)
//////////////console.log(true && true)
//////////////console.log(true || false)
//////////////console.log(!true)
////////////function infoAboutPerson(name, age) {
////////////    return 'Возраст ' + name + ' - ' + age
////////////}
////////////
////////////
////////////console.log(infoAboutPerson('Dias', 23))
////////////console.log(Math.floor(3.5))
////////////console.log(Math.ceil(3.5))
//////////
//////////function getRandomBetween(min, max) {
//////////    return Math.round(Math.random() * (max - min) + min)
//////////}
//////////
////////////console.log(getRandomBetween(2, 10))
//////////
//////////const name = 'Diar'
//////////const output = `Меня зовут ${name === 'Dias' ? 'Dias' : 'Mambet'}.`
//////////console.log(output)
//////////
//////////console.log('      DIas     '.trim())
////////
////////let counter = 0
////////const inteval = setInterval(() => {
////////    if (counter === 5) {
////////        clearInterval(inteval)
////////        console.log('counter = ' + counter)
////////    } else {
////////        console.log(counter**2)
////////        ++counter
////////    }
//////////}, 1000)
//////////
////////const sum = (num1 = 2, num2 = num1 ** 2) => num1 + num2
////////console.log(sum(5, 10))
//////
//////const massive = [1, 2, 3, 4]
//////massive.unshift(1)
//////console.log(massive)
//////massive.unshift()
//////console.log(massive)
//////massive.pop()
//////console.log(massive)
//////massive.push(4)
//////console.log(massive)
//////massive.shift()
//////console.log(massive)
////
////const text = 'А роза упала на лапу Азора'.split(' ')
//////const reverseText = text.split('').reverse().join('')
//////console.log(reverseText)
////
////const textUpperCase = text.map(word => word.toLocaleUpperCase())
////console.log(textUpperCase)
////
//
//const numbers = [1, 2, 3, 4, 5]
//
//const filteredNumbers = numbers.filter(num => num % 2 === 0)
//console.log(filteredNumbers)
const barberShop = {
    location: 'Parkoviy',
    workers: 4,
    age: '2 years'}

const {location: area, workers: peopleCount, age} = barberShop
console.log(area)
console.log(peopleCount)
console.log(age)

//for (let key of barberShop) {
//    console.log(key)
//}

for (let key in barberShop) {
    console.log(key)
}
=======
//////////function person(name, lastName, age) {
//////////    console.log(name + ' ' + lastName + '. Родился в ' + (2021 - age))
//////////}
//////////
//////////cars = ['mazda', 'prosche', 'kia', 'lada']
//////////for (let car of cars) {
//////////    console.log(car)
//////////}
//////////
//////////const string = '42'
//////////console.log(string + 2)
//////////console.log(+string + 2)
////////const person = {
////////    name: 'Dias',
////////    lastName: 'Malibekov',
////////    age: 23,
////////    isBarber: true,
////////    languages: ['ru', 'en', 'kz']
////////}
////////
////////const keys = Object.keys(person)
////////keys.forEach(key => {
////////    console.log(`${key}: ${person[key]}`)
////////})
////////
//////
//////const java = document.getElementById('java')
//////const heading2 = document.querySelectorAll('h1')[1]
//////
//////setTimeout(() => {
//////    addStylesTo(heading2)
//////}, 1500)
//////
//////setTimeout(() => {
//////    addStylesTo(java)
//////    java.style.backgroundColor = 'black';
//////    java.style.padding = '2rem';
//////}, 3000)
//////
//////function addStylesTo(node) {
//////    node.textContent = 'Chanched by JavaScript'
//////    node.style.color = 'red'
//////    node.style.textAlign = 'center'
//////    node.style.backgroundColor = 'green'
//////}
////
////let count = 0;
////for(count = 0; count < ; count++){
////setTimeout(()=>console.log(count), 0);
////}
//let count = 0;
//for(count = 0; count < 10; count++) {
//    setTimeout(()=>console.log(count), 0);
//}

const fruits = [
{id: 1, type: 'apple', price: 52},
{id: 2, type: 'apple', price: 76},
{id: 3, type: 'orange', price: 48},
{id: 4, type: 'orange', price: 52},
{id: 5, type: 'apple', price: 32},
{id: 6, type: 'pineapple', price: 52},
{id: 7, type: 'apple', price: 88},
{id: 8, type: 'pineapple', price: 66},
{id: 9, type: 'apple', price: 52},
{id: 10, type: 'pineapple', price: 88},
];


function fruitsNewArray(array) {
    const result = array.filter(arr => arr['type']!== 'apple')
    result.forEach(arr => {
        if (arr['type'] === 'pineapple') {
            arr['price'] *= 2
        }
    })
    return result
}

function fruitsCurrentArray(array) {
    array.forEach(arr => {
        if (arr['type'] === 'pineapple') {
            arr['price'] *= 2
        }
        if (arr['type'] === 'apple') {
            delete array[arr['id'] - 1]
            }
    })
}

fruitsCurrentArray(fruits)
//console.log(fruits)
//console.log(fruitsNewArray(fruits))
console.log(fruits)
console.log(fruits)

>>>>>>> d02a6ce0b4cc1c59cf8345c4760163bef3d7c1cf
