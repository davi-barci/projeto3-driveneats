let itens = [], precoItens = [];

function finalizarPedido(){
    let precoTotal = precoItens.reduce((a, b) => {
        return a + b;
      });
    let mensagem = "Olá, gostaria de fazer o pedido:" + "\n" + 
    "- Prato: " + itens[0] + "\n" +
    "- Bebida: " + itens[1] + "\n" +
    "- Sobremesa: " + itens[2] + "\n" +
    "Total: R$ " + precoTotal.toFixed(2);

    window.open("https://wa.me/5521979065971?text=" + encodeURIComponent(mensagem));
}

function transformarPrecoDecimal(texto){
    texto = texto.slice(3,texto.length);
    texto = texto.replace(',','.');
    texto = Number(texto);
    return texto;
}

function selecionandoItens(tipoRefeicao,objetoSelecionado){
    const selecaoAtual = document.querySelectorAll(tipoRefeicao+'.selecionado');
    if (selecaoAtual.length !== 0){
        selecaoAtual[0].classList.remove('selecionado');
    }

    objetoSelecionado.classList.add('selecionado');

    if (tipoRefeicao === '.prato'){
        itens[0] = document.querySelector('.prato.selecionado p').innerHTML;
        let precoTexto = document.querySelector('.prato.selecionado p:nth-of-type(3)').innerHTML;
        precoItens[0] = transformarPrecoDecimal(precoTexto);
    }else if (tipoRefeicao === '.bebida'){
        itens[1] = document.querySelector('.bebida.selecionado p').innerHTML;
        let precoTexto = document.querySelector('.bebida.selecionado p:nth-of-type(3)').innerHTML;
        precoItens[1] = transformarPrecoDecimal(precoTexto);
    }else{
        itens[2] = document.querySelector('.sobremesa.selecionado p').innerHTML;
        let precoTexto = document.querySelector('.sobremesa.selecionado p:nth-of-type(3)').innerHTML;
        precoItens[2] = transformarPrecoDecimal(precoTexto);
    }

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