 let grade = function (score, possibleScore) {
    let percent = (score / possibleScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A division'
    } else if (percent >= 80) {
        letterGrade = 'B division'
    } else if (percent >= 70) {
        letterGrade = 'C division'
    } else if (percent >= 65) {
        letterGrade = 'D division'
    } else {
        letterGrade = 'F division'
    }

    return`you got a ${letterGrade} ${percent}%`
}
let result = grade(15, 20)
console.log(result) 

