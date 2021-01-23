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

