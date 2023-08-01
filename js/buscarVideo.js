import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo (event) {
    event.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild) {
        lista.remove(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)
    ));
}


const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", event => buscarVideo(event));

