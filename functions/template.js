let getTip = function (total , tipPercent = .25,) {
   
    return`A ${tipPercent}% tip on $${total} would be $${total * tipPercent }`
}
let tip = getTip(61)
console.log(tip)
