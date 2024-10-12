const botoesCarrossel = document.querySelectorAll(".botao");

const imagens = document.querySelectorAll(".imagem");

const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao,indice) => {
    botao.addEventListener('click', () => {
        desativaBotaoSelecionado();
        botao.classList.add("selecionado");
        esconderImagemAtiva();
        imagens[indice].classList.add("ativa");
        escoderInformacoesAtiva();
        informacoes[indice].classList.add("ativa");

    });
});
function escoderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

