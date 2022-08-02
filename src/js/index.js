const cartoes = document.querySelectorAll(".cartao");

var indexCartaoAtual = 0;


/* OBJETIVO 1: quando clicar na seta de avançar mostrar o proximo cartao da lista */

const btnAvancar = document.getElementById("btn-avancar");

btnAvancar.addEventListener("click", function () {
    if (indexCartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    indexCartaoAtual++;
    mostrarCartao();
})


/* OBJETIVO 2: quando clicar na seta de voltar mostrar o anterior cartao da lista */
const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
    if (indexCartaoAtual === 0) return;

    esconderCartaoSelecionado();

    indexCartaoAtual--;
    mostrarCartao();
})


function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
    cartoes[indexCartaoAtual].classList.add("selecionado");
}