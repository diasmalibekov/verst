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
