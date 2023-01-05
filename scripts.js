function selecionandoItens(tipoRefeicao,objetoSelecionado){
    const selecaoAtual = document.querySelectorAll(tipoRefeicao+'.selecionado');
    console.log(selecaoAtual);
    if (selecaoAtual.length !== 0){
        selecaoAtual[0].classList.remove('selecionado');
    }
    const refeicaoSelecionada = document.querySelector(objetoSelecionado);
    refeicaoSelecionada .classList.add('selecionado');
}