// 1. Função para calcular o saldo e determinar o nível
function calcularNivelRankeado(vitorias, derrotas) {
    
    // 2. Operadores: Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel;

    // 3. Estrutura de Decisão: Determina o nível com base no número de vitórias
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else { // Se vitórias for maior ou igual a 101
        nivel = "Imortal";
    }

    // Retorna um objeto com o saldo e o nível para ser usado fora da função
    return { saldo: saldoVitorias, nivel: nivel };
}

// --- Parte Principal do Código ---

// 4. Variáveis: Define a quantidade de vitórias e derrotas do jogador
const vitoriasDoJogador = 95;
const derrotasDoJogador = 12;

// Chama a função e armazena o resultado (o objeto retornado) em uma variável
const resultado = calcularNivelRankeado(vitoriasDoJogador, derrotasDoJogador);

// 5. Saída: Exibe a mensagem final com os dados calculados pela função
console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`);