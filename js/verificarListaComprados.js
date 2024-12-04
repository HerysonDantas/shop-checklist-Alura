const ocultaListaComprados = document.getElementById("container-lista-comprados");


export function verificarListaComprados(lista){
    if (lista.childElementCount===0){
        ocultaListaComprados.style.display = "none";

    }else{
        ocultaListaComprados.style.display ="block";
    }
}
