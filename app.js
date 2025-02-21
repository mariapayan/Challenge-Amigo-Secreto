let amigos = []




let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

//Implementa una función para agregar amigos 

function agregarAmigo() {
    let nombreAmigo = amigo;

    if (nombreAmigo.value.trim().length == 0) { 
        alert('Por favor, inserte un nombre.');
    
    } else {
        if (amigos.includes(nombreAmigo.value)) { 
            alert('Este nombre ya se encuentra en la lista, por favor ingrese un nombre nuevo')
        } else {
            agregaAmigoLista(nombreAmigo.value, amigos); 
            modificaElementoID(nombreAmigo, ''); 
            creaListaAmigos(listaAmigos, amigos); 
        }
    }
    
}

//Implementar funci{on para actualizar la lista de amigos}

function modificaElementoID(elementoID, texto) {
    elementoID.value = texto;
    elementoID.innerHTML = texto;
}

function creaListaAmigos(elementoID, amigos) {
    modificaElementoID(elementoID, '');
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        elementoID.appendChild(li);
    }
}

function agregaAmigoLista(nombre, amigos) {
    amigos.push(nombre);
}

//Implementar función para realizar sorteo

function sortearAmigo() {
    if (amigos.length < 4) { 
        alert('Para sortear al amigo secreto se necesitan al menos cuatro nombres.')
    } else {
        modificaElementoID(listaAmigos, ''); 
        modificaElementoID(resultado, `El amigo secreto sorteado es: ${generaSorteo(amigos)}`); 
        
    }
}



function generaSorteo(amigos) {
    nombreSorteado = Math.floor(Math.random() * amigos.length);
    return amigos[nombreSorteado];
}