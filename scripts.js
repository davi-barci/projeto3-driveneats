function finalizarPedido(){
    console.log("teste...");
}

function selecionandoItens(tipoRefeicao,objetoSelecionado){
    const selecaoAtual = document.querySelectorAll(tipoRefeicao+'.selecionado');
    if (selecaoAtual.length !== 0){
        selecaoAtual[0].classList.remove('selecionado');
    }
    const refeicaoSelecionada = document.querySelector(objetoSelecionado);
    refeicaoSelecionada.classList.add('selecionado');

    const qtdSelecoes = document.querySelectorAll('.selecionado');
    if (qtdSelecoes.length === 3){
        const botaoPedido = document.querySelector('.fechamento-pedido');
        botaoPedido.addEventListener("click", finalizarPedido);
        document.querySelector('.fechamento-pedido div').style.backgroundColor = "#32B72F";
        let textoBotao = document.querySelector('.fechamento-pedido p');
        textoBotao.style.fontWeight = "700";
        textoBotao.innerHTML = "Fechar Pedido"
    }
}