// Lista de nombres
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function mostrarResultado(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    asignaciones.forEach((texto) => {
        const li = document.createElement("li");
        li.textContent = texto;
        resultado.appendChild(li);
    });
}

// 🔽 NUEVA FUNCIÓN: sortear un solo amigo secreto
function sortearUnAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indiceAleatorio];

    mostrarResultado([`🎁 El amigo secreto es: ${elegido}`]);
}
