import { desenharPecas, queimarCasa, atualizarMensagem, destacarMovimentos, limparDestaques } from "./board.js";
import { calcularMovimentosPossiveis } from './knight.js';

let estado = {
    posicaoCavalo1: null,
    posicaoCavalo2: null,
    casasQueimadas: [],
    jogadorDaVez: 1,
    jogoAcabou: true,
    placar: { jogador1: 0, jogador2: 0 }
};

function gerarCoordenada() {
    return Math.floor(Math.random() * 8);
}

// Função auxiliar para obter os movimentos válidos do jogador atual
function getMovimentosValidosAtuais() {
    const cavaloDoTurno = estado.jogadorDaVez === 1 ? estado.posicaoCavalo1 : estado.posicaoCavalo2;
    const outroCavalo = estado.jogadorDaVez === 1 ? estado.posicaoCavalo2 : estado.posicaoCavalo1;
    const movimentosTeoricos = calcularMovimentosPossiveis(cavaloDoTurno.linha, cavaloDoTurno.coluna);
    
    return movimentosTeoricos
        .filter(mov => isMovimentoValido(mov[0], mov[1], outroCavalo))
        .map(mov => ({ linha: mov[0], coluna: mov[1] })); // Retorna um objeto para clareza
}

export function iniciarJogo() {
    estado.casasQueimadas = [];
    estado.jogoAcabou = false;
    estado.jogadorDaVez = 1;

    const placarSalvo = localStorage.getItem('joust-placar');
    if (placarSalvo) {
        estado.placar = JSON.parse(placarSalvo);
    }

    estado.posicaoCavalo1 = { linha: gerarCoordenada(), coluna: gerarCoordenada() };
    do {
        estado.posicaoCavalo2 = { linha: gerarCoordenada(), coluna: gerarCoordenada() };
    } while (
        estado.posicaoCavalo2.linha === estado.posicaoCavalo1.linha &&
        estado.posicaoCavalo2.coluna === estado.posicaoCavalo1.coluna
    );

    desenharPecas(estado.posicaoCavalo1, estado.posicaoCavalo2);
    atualizarMensagem(`Vez do Jogador 1`);
    
    // NOVO: Destaca os movimentos iniciais
    limparDestaques();
    destacarMovimentos(getMovimentosValidosAtuais());
}

export function onCasaClick(linha, coluna) {
    if (estado.jogoAcabou) return;

    const cavaloDoTurno = estado.jogadorDaVez === 1 ? estado.posicaoCavalo1 : estado.posicaoCavalo2;
    
    // Verifica se a casa clicada é um dos movimentos válidos
    const movimentosValidos = getMovimentosValidosAtuais();
    const ehJogadaValida = movimentosValidos.some(mov => mov.linha === linha && mov.coluna === coluna);

    if (ehJogadaValida) {
        // Limpa os destaques assim que a jogada é feita
        limparDestaques();
        
        const posAntiga = { linha: cavaloDoTurno.linha, coluna: cavaloDoTurno.coluna };
        estado.casasQueimadas.push(posAntiga);
        queimarCasa(posAntiga.linha, posAntiga.coluna);
        
        cavaloDoTurno.linha = linha;
        cavaloDoTurno.coluna = coluna;

        desenharPecas(estado.posicaoCavalo1, estado.posicaoCavalo2);

        trocarTurno();
    }
}

function isMovimentoValido(linha, coluna, posOutroCavalo) {
    if (linha < 0 || linha > 7 || coluna < 0 || coluna > 7) return false;
    if (linha === posOutroCavalo.linha && coluna === posOutroCavalo.coluna) return false;
    if (estado.casasQueimadas.some(casa => casa.linha === linha && casa.coluna === coluna)) return false;
    return true;
}

function trocarTurno() {
    estado.jogadorDaVez = (estado.jogadorDaVez === 1) ? 2 : 1;
    atualizarMensagem(`Vez do Jogador ${estado.jogadorDaVez}`);
    
    // Verifica a condição de vitória e, se o jogo não acabou, destaca os novos movimentos
    verificarFimDeJogo();
}

function verificarFimDeJogo() {
    const movimentosValidos = getMovimentosValidosAtuais();

    if (movimentosValidos.length === 0) {
        estado.jogoAcabou = true;
        const vencedor = (estado.jogadorDaVez === 1) ? 2 : 1;
        
        if (vencedor === 1) {
            estado.placar.jogador1++;
        } else {
            estado.placar.jogador2++;
        }
        localStorage.setItem('joust-placar', JSON.stringify(estado.placar));
        
        atualizarMensagem(`Fim de Jogo! Jogador ${vencedor} venceu!`);
        
        atualizarPlacar();
    } else {
        destacarMovimentos(movimentosValidos);
    }


function atualizarPlacar() {
    const elementoPlacar = document.getElementById('placar');
    if (elementoPlacar) {
        elementoPlacar.textContent = `Placar: Jogador 1: ${estado.placar.jogador1} - Jogador 2: ${estado.placar.jogador2}`;
    }
}
}