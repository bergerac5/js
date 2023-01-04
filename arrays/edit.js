const todo = ['wash', 'eat', 'clean', 'coding', 'rest']

todo.splice(2, 1)

todo.push('play')

console.log(todo.shift())

console.log(`you have ${todo.length} todo`)
console.log(todo)