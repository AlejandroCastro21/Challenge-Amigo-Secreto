// Aqui guardo todos los nombres que van agregando
let amigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    // Si no escribio nada le aviso
    if (nombre === '' || nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Lo agrego al array y limpio el input
    amigos.push(nombre);
    document.getElementById('amigo').value = '';
    mostrarAmigos(); // Actualizo la lista visual
}

    // Esta funcion muestra todos los amigos en la lista
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpio lo que habia antes
    
    // Recorro el array y creo un li para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

    // Aqui sorteo quien es el amigo secreto
function sortearAmigo() {
    // Si no hay nombres no puedo sortear
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }
    
    // Genero un numero random para elegir
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Muestro el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li>' + amigoSorteado + '</li>';
}