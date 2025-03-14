//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo"); // Pega o valor do campo de texto
    let nome = nomeInput.value.trim(); // Remove espaços extras

    // Se o nome estiver vazio, exibe um alerta
    if (!nome || nome.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return; // Sai da função se não tiver nome
    }

    amigos.push(nome);
    
    atualizarLista();

    nomeInput.value = "";
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    amigos.forEach(nome => {
        let li = document.createElement("li"); 
        li.textContent = nome; 
        lista.appendChild(li); 
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Ainda não há amigos para sortear!");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    amigos = [];

    // Limpa a lista na tela
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Exibe o nome sorteado 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}