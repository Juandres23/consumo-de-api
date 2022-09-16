let btncarga = document.getElementById('cbo-carga');
btncarga.addEventListener('click',(e)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ getRandomArbitrary(1,644);
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        let tr = document.getElementById('poke');
        tr.innerHTML+=`<td> <img src= '${data.sprites.front_default}'> </td><td> ${data.species.name}`;
    

    })
    .catch(err=>console.log(err))
})

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}