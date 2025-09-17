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
}