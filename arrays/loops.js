const todo = ['wash', 'eat', 'clean', 'coding', 'rest']

todo.splice(2, 1)

todo.push('play')

console.log(todo.shift())

console.log(`you have ${todo.length} todo`)

todo.forEach(function(todo, index){
    const num =index + 1
    console.log(`${num}, ${todo}`) 
})