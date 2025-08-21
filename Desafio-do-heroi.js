// Criamos uma lista (array) de heróis, cada um com nome e xp
const herois = [
    { nome: "Mario", xp: 8250 },
    { nome: "Luigi", xp: 7200 },
    { nome: "Link", xp: 1500 },
    { nome: "Zelda", xp: 1800 }
];

// Usamos um laço 'for...of' para passar por cada herói da lista
for (let heroi of herois) {
    let nivel; // Variável de nível para o herói atual

    // A mesma lógica de decisão de antes
    if (heroi.xp <= 1000) {
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem para o herói atual dentro do laço
    console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}