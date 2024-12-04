import { adicionaDataHora } from "./adicionaDataHora.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;
       
    }

    const itemData = elemento.querySelector(".item-data");
    itemData.textContent = adicionaDataHora(itemData);

}

