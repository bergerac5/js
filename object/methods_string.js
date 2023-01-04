

// challenge

let isValidPassword = function (password) {
    //if (password.length >= 8 && !password.includes('password')){
       // return true
    //}else {
        //return false
    //}
    return password.length >= 8 && !password.includes('password')
    
}
console.log(isValidPassword('fgjkh'))
console.log(isValidPassword('ghjhkhkkjgjfjhgjhkghhkh'))
console.log(isValidPassword('asdhgjhjkfjkkerghpassword'))