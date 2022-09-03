//multiple argument
let add = function (a, b) {
    return a + b
}
let result = add (10, 1)
console.log(result)

//Deafult argumemt
let getScoreText = function(name = 'berg',score = 0) {
    return`Name: ${name} -Score ${score}`
    //return 'Name: ' + name + '-Score: ' + score
}
let scoreText = getScoreText(undefined, 90)
console.log(scoreText)

//challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
} 
let tip = getTip (100, .25)
console.log(tip)
// template strings
let name  = 'bergerac'
let domain ="software enginer"
console.log(`Hey my name ${name} I am ${domain}`)