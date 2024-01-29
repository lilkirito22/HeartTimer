document.addEventListener("DOMContentLoaded", function () {
    const dataConhecimento = new Date("2023-09-12");

    const heart = document.getElementById("heart");
    const contadorTempo = document.getElementById("contador-tempo");
    const textoEscrito = document.getElementById("texto-escrito");
    const trocarCorBtn = document.getElementById("trocar-cor");

    function formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }

    function atualizarContador() {
        const dataAtual = new Date();
        const diferenca = dataAtual - dataConhecimento;

        const segundos = Math.floor(diferenca / 1000) % 60;
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        const tempoFormatado = `${dias}d ${formatarNumero(horas)}h ${formatarNumero(minutos)}m ${formatarNumero(segundos)}s`;

        contadorTempo.textContent = `Há ${tempoFormatado}`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();

    const mensagem = "Você é a razão do meu sorriso. Feliz em estar ao seu lado! 💖";
    let indexTexto = 0;

    function escreverTexto() {
        textoEscrito.textContent += mensagem[indexTexto];
        indexTexto++;

        if (indexTexto < mensagem.length) {
            setTimeout(escreverTexto, 50);
        }
    }

    escreverTexto();

    function gerarCorAleatoria() {
        const letras = "0123456789ABCDEF";
        let cor = "#";
        for (let i = 0; i < 6; i++) {
            cor += letras[Math.floor(Math.random() * 16)];
        }
        return cor;
    }

    function trocarCor() {
        const novaCor = gerarCorAleatoria();
        heart.style.background = novaCor;
        textoEscrito.style.color = novaCor;
    }

    trocarCorBtn.addEventListener("click", trocarCor);
});
