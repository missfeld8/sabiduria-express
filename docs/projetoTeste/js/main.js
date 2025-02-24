document.addEventListener("DOMContentLoaded", () => {
    fetch("data/dados.json")
        .then(response => response.json())
        .then(data => {
            const listaServicos = document.getElementById("lista-servicos");
            data.servicos.forEach(servico => {
                const div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML = `<h3>${servico.nome}</h3><p>${servico.descricao}</p>`;
                listaServicos.appendChild(div);
            });
            
            const listaPortfolio = document.getElementById("lista-portfolio");
            data.portfolio.forEach(projeto => {
                const div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p>`;
                listaPortfolio.appendChild(div);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});

const formContato = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

formContato.addEventListener("submit", event => {
    event.preventDefault();
    mensagemSucesso.classList.remove("hidden");
    setTimeout(() => mensagemSucesso.classList.add("hidden"), 3000);
    formContato.reset();
});