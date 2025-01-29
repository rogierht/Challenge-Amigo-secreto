// 1. Declaración del array para almacenar amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value;

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Llamar a la función que actualiza la lista visual
  actualizarLista();
}

// 3. Función para actualizar la lista visual
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y crear elementos de lista
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4. Función para sortear amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);
}
