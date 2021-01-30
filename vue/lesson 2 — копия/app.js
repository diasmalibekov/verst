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


function fruitsCurrentArray(array) {
    for (let i = array.length - 1; i > -1; i--) {
        if (fruits[i]['type'] === 'apple') {
            array.splice(i, 1)
        } else if (fruits[i]['type'] === 'pineapple') {
            fruits[i]['price'] *= 2
        }
    }
}

function fruitsNewArray(array) {
    const result = []
    array.forEach(arr => {
        result.push(Object.assign({}, arr))
        if(result[result.length-1]['type'] === 'pineapple') {
            result[result.length-1]['price'] *= 2
        } else if(result[result.length-1]['type'] === 'apple') {
            result.pop()
        }
    })
    return result
}

console.log(fruitsNewArray(fruits))
console.log(fruits)
