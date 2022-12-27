// read existing todods from localStorage
const getSavedTodos = function (){
    // checking for existing saved 
    const todosJSON=localStorage.getItem('todos')

    if(todosJSON !==null){
        return JSON.parse(todosJSON) 
    }else{
        return[]
    }
}
// generate the DOM for a todo
const generateTodoDOM = function(todo){
    const p =document.createElement('p')
    p.textContent = todo.text
    return p
}

// render application todos
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
        const p =generateTodoDOM(todo)
       document.querySelector('#sea').appendChild(p) 
    })
}

// save todos to lacalStorage
const savedNotes=function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}
