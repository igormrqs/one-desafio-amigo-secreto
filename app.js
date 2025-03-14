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
