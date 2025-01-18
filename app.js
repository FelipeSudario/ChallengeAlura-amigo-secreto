// Array para armazenar os nomes
const names = [];

// Selecionar os elementos
const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const drawButton = document.getElementById("drawButton");
const nameList = document.getElementById("listaAmigos");
const result = document.getElementById("resultado");

// Adicionar evento ao botão "Adicionar Nome"
addButton.addEventListener("click", () => {
    const name = textInput.value.trim();

    // Verificar se o campo está vazio
    if (name === "") {
        result.textContent = "O campo está vazio. Por favor, insira um nome!";
        return;
    }

    // Verificar se o nome contém números
    if (/\d/.test(name)) {
        result.textContent = "Nomes não podem conter números. Por favor, insira um nome válido!";
        return;
    }

    // Adicionar o nome ao array e atualizar a lista
    names.push(name);
    updateNameList();
    textInput.value = ""; // Limpar o campo de entrada
    result.textContent = ""; // Limpar mensagens anteriores
});

// Adicionar evento ao botão "Sortear Nome"
drawButton.addEventListener("click", () => {
    if (names.length === 0) {
        result.textContent = "A lista está vazia. Adicione nomes antes de sortear!";
        return;
    }

    // Sortear um nome aleatório
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];

    // Exibir o nome sorteado
    result.textContent = `Nome sorteado: ${chosenName}`;

    // Limpar o array e a lista exibida
    names.length = 0; // Esvaziar o array
    updateNameList(); // Atualizar a lista exibida
});

// Função para atualizar a lista na tela
function updateNameList() {
    nameList.innerHTML = "";

    // Criar um item de lista para cada nome no array
    names.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}
