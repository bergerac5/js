const todos = getSavedTodos()



const filter = {
    searchText:'',
    completed: false
}

renderTodos(todos, filter)

document.querySelector('#input').addEventListener('input', function (e) {
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.add.value,
        completed: false
    })
    
    renderTodos(todos, filter)
    e.target.elements.add.value = ''
})

document.querySelector('#completed').addEventListener('change', function (e){
    filter.completed=e.target.checked
    renderTodos(todos, filter)
})