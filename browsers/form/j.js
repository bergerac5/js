const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work',
    body: 'Exercise. Eat a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}] 

const filters = {
    searchText: ''
}

const renderNote = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.  toLowerCase())

        
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNote(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked'
})
 

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNote(notes, filters)
})


document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''

})