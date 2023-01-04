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

// Querry all and remove

// const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     if(p.textContent.includes('text')){
//         p.remove()
//     }
// })
// document.querySelector('button').addEventListener('click', function(){
//     console.log('Did this work')
// })
document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked'
})