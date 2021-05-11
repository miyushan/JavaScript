const content = document.querySelector('.main_headline'); 

const people = ['shakeer', 'miyushan', 'rodrigo'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});

