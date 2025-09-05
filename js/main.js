import { criarTabuleiro } from './board.js';
import { iniciarJogo, onCasaClick } from './game.js';

// NOVOS: Elementos da tela de animação
const telaAnimacao = document.getElementById('tela-animacao');

const telaEntrada = document.getElementById('tela-entrada');
const containerJogo = document.getElementById('container-jogo');
const botaoIniciar = document.getElementById('botao-iniciar');
const elementoTabuleiro = document.getElementById('tabuleiro');

// NOVO: Função para iniciar a sequência de telas
function iniciarSequencia() {
    // Esconde a tela de animação após um tempo (duração da animação + um buffer)
    // A animação dura 3s, então 3500ms é um bom tempo
    setTimeout(() => {
        telaAnimacao.classList.add('escondido');
        telaEntrada.classList.remove('escondido'); // Revela a tela de entrada
    }, 3500); // Ajuste este tempo se a animação for mais longa ou mais curta
}

// NOVO: Chama a sequência quando a página carrega
document.addEventListener('DOMContentLoaded', iniciarSequencia);


botaoIniciar.addEventListener('click', () => {
    telaEntrada.classList.add('escondido');
    containerJogo.classList.remove('escondido'); // Revela o container do jogo
    criarTabuleiro(elementoTabuleiro);
    iniciarJogo();  
});

elementoTabuleiro.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('casa')) {
        const linha = parseInt(evento.target.dataset.linha);
        const coluna = parseInt(evento.target.dataset.coluna);
        onCasaClick(linha, coluna);
    }
});