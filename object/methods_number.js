let num = 183.7598
console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//let min = 10
//let max = 20
//let randomNum = Math.floor(Math.random() * (max - min + 1)) + 10
//console.log(randomNum)


let guessGame = function(makeGuess) {
    let min = 1
    let max = 5
    let guess = Math.floor(Math.random() * (max - min + 1))
    return makeGuess === guess
}

console.log(guessGame(1))

