const todo = [{
    text: 'Order cat food',
    completed:true
}, {
    text: 'Clean kitchen',
    completed:false
}, {
    text: 'Buy food',
    completed:true
}, {
    text: 'Do work',
    completed:false
}, {
    text: 'Exercises',
    completed:true
}]

const deleteTodo = function (todo, todoText) {
    const index = todo.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if(index > -1) {
        todo.splice(index, 1)
    }
}
deleteTodo = (todo, 'buy food')
console.log(todo)