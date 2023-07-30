import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item"
    video.innerHTML = `
    <li class="videos__item">
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}r" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
</li>
    
    `
    return video;
}

async function listaVideo() {
    const listaAPI = await conectaAPI.listaVideos();
    listaAPI.forEach(element => {
        lista.appendChild(
            constroiCard(element.titulo, element.descricao, element.url, element.imagem))
        });

} 

listaVideo();