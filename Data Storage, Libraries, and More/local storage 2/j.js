let todos = []



const filter = {
    searchText:'',
    completed: false
}



const todosJSON=localStorage.getItem('todos')

if(todosJSON !==null){
   todos=JSON.parse(todosJSON) 
}
const renderTodos = function (todos,filter) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const completed = !filter.completed || !todo.completed
        return searchTextMatch && completed
    })


    const incompletedTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#sea').innerHTML = ''
    
    const summary =  document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos left`
    
    document.querySelector('#sea').appendChild(summary)
    
    filteredTodos.forEach(function(todo){
       const p =document.createElement('p')
       p.textContent = todo.text
       document.querySelector('#sea').appendChild(p) 
    })
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
    savedTodos(todos)
    renderTodos(todos, filter)
    e.target.elements.add.value = ''
})

document.querySelector('#completed').addEventListener('change', function (e){
    filter.completed=e.target.checked
    renderTodos(todos, filter)
})