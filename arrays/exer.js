const todos = [{
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

// const getThingsTodo = function (todos, query) {
//     return todos.filter(function(todo){
//         return !todo.completed
//     })
// }
// console.log(getThingsTodo(todos ))

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
