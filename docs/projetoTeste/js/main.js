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
                div.innerHTML = `
                    <h3>${projeto.nome}</h3>
                    <img src="${projeto.imagem}" alt="${projeto.nome}">
                    <p>${projeto.descricao}</p>
                    ${projeto.precoAtivo ? `<p><strong>Preço:</strong> R$ ${projeto.preco}</p>` : ""}
                    <button onclick="expandirProjeto('${projeto.nome}', '${projeto.descricao}', '${projeto.imagem}', '${projeto.preco}', ${projeto.precoAtivo})">Ver mais</button>
                `;
                listaPortfolio.appendChild(div);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});

function expandirProjeto(nome, descricao, imagem, preco, precoAtivo) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3>${nome}</h3>
            <img src="${imagem}" alt="${nome}">
            <p>${descricao}</p>
            ${precoAtivo ? `<p><strong>Preço:</strong> R$ ${preco}</p>` : ""}
        </div>
    `;
    document.body.appendChild(modal);
}