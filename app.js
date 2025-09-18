// Lista de nombres
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const errorDiv = document.getElementById("errorMensaje");

    if (nombre === "") {
        if (errorDiv) {
            errorDiv.textContent = "Por favor, escribe un nombre.";
            errorDiv.style.display = "block";
        }
        return;
    }
    if (amigos.includes(nombre)) {
        if (errorDiv) {
            errorDiv.textContent = "Ese nombre ya está en la lista.";
            errorDiv.style.display = "block";
        }
        return;
    }

    if (errorDiv) {
        errorDiv.textContent = "";
        errorDiv.style.display = "none";
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
function mostrarResultado(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Limpiar mensaje de error si existe
    const errorDiv = document.getElementById("errorMensaje");
    if (errorDiv) {
        errorDiv.textContent = "";
    }

    asignaciones.forEach((texto) => {
        const li = document.createElement("li");
        li.textContent = texto;
        resultado.appendChild(li);
    });
}
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    asignaciones.forEach((texto) => {
        const errorDiv = document.getElementById("errorMensaje");
        if (errorDiv) {
            errorDiv.textContent = "La lista está vacía. Agrega al menos un amigo.";
        }
        return;
        resultado.appendChild(li);
    });
}

// 🔽 NUEVA FUNCIÓN: sortear un solo amigo secreto
function sortearUnAmigo() {
    const errorDiv = document.getElementById("errorMensaje");
    if (amigos.length === 0) {
        if (errorDiv) {
            errorDiv.textContent = "La lista está vacía. Agrega al menos un amigo.";
            errorDiv.style.display = "block";
        }
        return;
    }

    if (errorDiv) {
        errorDiv.textContent = "";
        errorDiv.style.display = "none";
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indiceAleatorio];

    mostrarResultado([`🎁 El amigo secreto es: ${elegido}`]);
}
