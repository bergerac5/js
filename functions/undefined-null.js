// undefined for variables
let name

name ='berg'

if (name === undefined) {
    console.log('please provide a your name')
} else{
    console.log(name)
}
// undefined for function arguments
//undefined as function return default value
let square = function (a) {
    return a**2
}
let result = square(3) 
console.log(result)
//null assined value
let age = 8
age = undefined
console.log(age)

