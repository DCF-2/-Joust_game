export function calcularMovimentosPossiveis(linha, coluna){
    const movimentos = [
        [linha - 2, coluna - 1], [linha - 2, coluna + 1],
        [linha + 2, coluna - 1], [linha + 2, coluna + 1],
        [linha - 1, coluna - 2], [linha - 1, coluna + 2],
        [linha + 1, coluna - 2], [linha + 1, coluna + 2],
    ];
    return movimentos;
}