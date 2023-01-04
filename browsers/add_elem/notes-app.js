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


// const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     if(p.textContent.includes('')){
//         p.remove()
//     }
// })

//add a new element

// const newPs = document.createElement('p')
// newPs.textContent = 'new element from Javascript'
// document.querySelector('body').appendChild(newPs)
const incompletedTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompletedTodos.length} todos left`

document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
   const p =document.createElement('p')
   p.textContent = todo.text
   document.querySelector('body').appendChild(p) 
})