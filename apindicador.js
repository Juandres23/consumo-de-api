let button = document.querySelector('#btn-moneda')
button.addEventListener('click',(e)=>{
let url = 'https://mindicador.cl/api';
let datos ="";
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.bitcoin);
    let indi = document.getElementById('indicador');
    indi.innerHTML = `El valor del ${data.bitcoin.codigo} es ${data.bitcoin.valor}
    ${data.bitcoin.valor} en ${data.bitcoin.unidad_medida}`;

})

.catch(error=>error)
})
