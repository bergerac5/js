 

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked'
})


document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})
document.querySelector('#title').addEventListener('click', function (e) {
    console.log('my title')
}) 
