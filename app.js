//funcion para almacenar los nombres y revisar si se repiten
let amigos = [];

//funcion para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

//funcion para validar el campo de entrada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

//funcion para actualizar los amigos
    amigos.push(nombre);
    
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    listaAmigos.appendChild(listItem);

 //funcion que limpiar el campo de entrada  
    input.value = "";

 //Funcion para actualizar la lista de la interfaz
    actualizarLista();

}
// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("delete-button");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}
// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo del array
    actualizarLista(); // Actualiza la UI
}
// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}