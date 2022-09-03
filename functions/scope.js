let convertFahrenheitToCelsius = function (fahrenheit) {
    let  celsius =(fahrenheit -  32)*5/9
    return celsius
    
    if (celsius <= 0) {
        let isFreezing = true
    }
}
let result = convertFahrenheitToCelsius(30)
console.log(result)

let tempOne = convertFahrenheitToCelsius (66)
let tempTwo = convertFahrenheitToCelsius (32)

console.log(tempOne)
console.log(tempTwo)