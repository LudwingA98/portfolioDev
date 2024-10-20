const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

fetch(url)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('app')
    element.innerHTML = 
    `
    <h2>name:</h2>
    <p>${data.name}</p>
    <h2>order list:</h2>
    <p>${data.order}</P>
    <h2>charapter list:</h2>
    <p>${data.id}</p>
    <h2>base experience:</h2>
    <p>${data.base_experience}</p>
    <img src="${data.sprites.front_default}"/>
    `
    console.log(data)
})

.catch(err => console.log(err))