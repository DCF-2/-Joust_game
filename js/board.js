export function criarTabuleiro(elementoTabuleiro) {
    elementoTabuleiro.innerHTML = "";
    for (let linha = 0; linha < 8; linha++) {
        for (let coluna = 0; coluna < 8; coluna++) {
            const casa = document.createElement('div');
            casa.classList.add('casa');
            casa.dataset.linha = linha;
            casa.dataset.coluna = coluna;
            elementoTabuleiro.appendChild(casa);
        }
    }
}

export function desenharPecas(posicaoCavalo1, posicaoCavalo2) {
    const todasAsCasas = document.querySelectorAll('.casa');
    todasAsCasas.forEach(casa => {
        // Limpa classes das peças e remove o nome do jogador
        casa.classList.remove('cavalo1', 'cavalo2');
        const label = casa.querySelector('.jogador-label');
        if (label) {
            label.remove();
        }
    });

    // Função auxiliar para criar o nome
    const criarLabel = (texto) => {
        const label = document.createElement('span');
        label.className = 'jogador-label';
        label.textContent = texto;
        return label;
    };

    if (posicaoCavalo1) {
        const casaCavalo1 = document.querySelector(`[data-linha="${posicaoCavalo1.linha}"][data-coluna="${posicaoCavalo1.coluna}"]`);
        if (casaCavalo1) {
            casaCavalo1.classList.add('cavalo1');
            casaCavalo1.appendChild(criarLabel('Jogador 1'));
        }
    }
    
    if (posicaoCavalo2) {
        const casaCavalo2 = document.querySelector(`[data-linha="${posicaoCavalo2.linha}"][data-coluna="${posicaoCavalo2.coluna}"]`);
        if (casaCavalo2) {
            casaCavalo2.classList.add('cavalo2');
            casaCavalo2.appendChild(criarLabel('Jogador 2'));
        }
    }
}

export function queimarCasa(linha, coluna) {
    const casaQueimada = document.querySelector(`[data-linha="${linha}"][data-coluna="${coluna}"]`);
    if (casaQueimada) {
        casaQueimada.classList.add('queimada');
    }
}

export function atualizarMensagem(texto) {
    const elementoMensagem = document.getElementById('mensagem');
    if (elementoMensagem) {
        elementoMensagem.textContent = texto;
    }
}

// NOVO: Função para iluminar as casas válidas
export function destacarMovimentos(movimentos) {
    movimentos.forEach(mov => {
        const casa = document.querySelector(`[data-linha="${mov.linha}"][data-coluna="${mov.coluna}"]`);
        if (casa) {
            casa.classList.add('movimento-possivel');
        }
    });
}

// NOVO: Função para limpar a iluminação
export function limparDestaques() {
    document.querySelectorAll('.movimento-possivel').forEach(casa => {
        casa.classList.remove('movimento-possivel');
    });
}