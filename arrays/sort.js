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

const sortNotes = function(notes){
   notes.sort(function(a, b){
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
   }) 
}
sortNotes(notes)
console.log(notes)