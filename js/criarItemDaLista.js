import { adicionaDataHora } from "./adicionaDataHora.js";
import { verificarListaComprados} from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";
const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;
  
export function criarItemDaLista(item){
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeItem = document.createElement("div");
    containerNomeItem.classList.add("container-nome-compra");
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input")
        const checkboxCostumizado = evento.currentTarget.querySelector(".checkbox-costumizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCostumizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);

        } else {
            checkboxCostumizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    });

    const checkboxCostumizado = document.createElement("div");
    checkboxCostumizado.classList.add("checkbox-costumizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCostumizado);

    containerCheckbox.appendChild(checkboxLabel);


    containerNomeItem.appendChild(containerCheckbox);
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add();
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDaLista);
    });


    botaoRemover.appendChild(imagemRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    })


    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);
    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBotoes);


    const itemData = document.createElement("p");
    itemData.innerText= adicionaDataHora();
    itemData.classList.add("item-data");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);
    
    return itemDaLista;
};

