let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    listaAmigos.appendChild(listItem);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para realizar el sorteo.");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = sorteados[Math.floor(Math.random() * sorteados.length)];
        } while (amigoSecreto === amigos[i]);
        
        resultado.push({ nombre: amigos[i], amigoSecreto });
        sorteados = sorteados.filter(nombre => nombre !== amigoSecreto);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(par => {
        const listItem = document.createElement("li");
        listItem.textContent = `${par.nombre} → ${par.amigoSecreto}`;
        listaResultado.appendChild(listItem);
    });
}