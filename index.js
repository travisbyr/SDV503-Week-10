// Number
/*
32-bit floating-point 
0.2345 float C++
0.2345 var js
*/

// Math.floor - Check MDN - Roads -down- to nearest whole number
console.log(Math.floor(1.9))

// Math.round - Rounds to the nearest integer either up or down
console.log(Math.round(1.38))

// Math.ceil - Rounds -up- to nearest whole number
console.log(Math.ceil(0.3))

// Generate random integers
console.log(Math.round(Math.random() * 1000))

// Call an API for Google maps and you want to show some  dummy data
// for your latitude and longitude on the map you can use Math.random in this case

// Strings

console.log('Travis'.charAt(0)) // .charAt(index)
console.log('YouTube'.substring(1,6)) // .subString(startIndex, endIndex)
console.log('YouTube'.substring(4)) // Is returning all character values between a range

var a = 'aaa'
var b = 'ab'

// whats outcome of a < b

//indexOf('string')

console.log('John SDV'.indexOf('john')) // -1 as element is not valid

console.log('John SDV'.indexOf('John'))

function findInString(x, y) {
  return x.indexOf(y) !== -1 
}

console.log(findInString('Travis', 'T'))

// Find a cetain leeter in a large string

const str = 'Hello World is an old way to print strings in your console'
var count = 0
var find = str.indexOf('a')
while (find !==  -1) {
    count++
    find = str.indexOf('a', find + 1)
}
console.log(count) // refactor it with methods

// startWith endWith()

console.log('SDV NMIT'.startsWith('SDV'))
console.log('SDV NMIT'.endsWith('NMIT'))

var str1 = 'Travis, Bob, Henry, Michael'
console.log (str1)
console.log(str1.split(','))

var str2 = 'Phil'
console.log(str2.split(''))

// Replace a string
// .replace(string, replacementString)
console.log(str2.replace('Phil', 'Noel'))

// Objects

var Obj = {}
var arr = [1, 2, 3, 4]

Obj.array = arr

console.log(Obj)

// object.propertyName
// object['propertyName']

Obj.title = 'SDV'

console.log(Obj)

// Prototypal inheritance
/*
function ExampleClass() {
    this.firstName = 'Travis'
    this.lastName = function() {
        console.log(this.firstName)
    }

    var test = new ExampleClass()
    
    test.sayMyName() // constructor
    }
    */

    // Array

var arrayOne = [1, 2, 3, 4]
arrayOne.push(5)
console.log(arrayOne)

arrayOne.shift()
console.log(arrayOne)
console.log(arrayOne[0])

// for (var 1=0; i < arrayOne.length; i++)

// scope

//test = 'Travis'
//console.log(test)

// anything = 'string'
// var anything

// function test() {
//   var first = 'first'
//   last = 'last'
//   console.log(last)
//   var last
// }
/*
function testTwo() {
    var insideIf

    if(test) {
        insideIf = '10'
    }
    console.log(insideIf)
}

testTwo(true) // 10

*/

