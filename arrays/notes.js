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

// console.log(notes.pop( ))
//  notes.push('My Note')

// console.log(notes.shift())
// notes.unshift('First note')

//notes.splice(1, 0, 'this is t/he new sescond item ') 

// notes[2] = 'thisis now the new notes 3'



notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

const findNote = function (notes,noteTitle){
    return notes.find(function(note, index) {
        return notes.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const note = findNote(notes, '')
console.log(note)
