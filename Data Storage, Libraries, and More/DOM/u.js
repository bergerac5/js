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

// save todos to lacalStorage
const savedNotes=function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}

// generate the DOM for a todo
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    
    // setup remove button
    removeButton.textContent = ' x'
    todoEl.appendChild(removeButton)

    return todoEl
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


