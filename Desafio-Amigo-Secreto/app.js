let listaDeAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  listaDeAmigos.push(nome);

  atualizarLista();

  input.value = "";
  input.focus();
}

function atualizarLista() {
  const ul = document.getElementById("listaAmigos");

  ul.innerHTML = "";

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (listaDeAmigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];

  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);
}
