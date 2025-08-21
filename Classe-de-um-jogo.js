class Heroi {
    /**
     * Construtor da classe para criar um novo herói.
     * @param {string} nome - O nome do herói.
     * @param {number} idade - A idade do herói.
     * @param {string} tipo - O tipo do herói (ex: 'guerreiro', 'mago', 'monge', 'ninja').
     */
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    /**
     * Executa a ação de ataque do herói, exibindo uma mensagem
     * personalizada baseada no seu tipo.
     */
    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }

        // Exibe a mensagem final no console
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Demonstração de Uso ---

// 1. Criando instâncias (objetos) da classe Heroi
let heroiMago = new Heroi("Merlin", 150, "mago");
let heroiGuerreiro = new Heroi("Arthur", 35, "guerreiro");
let heroiMonge = new Heroi("Lee", 50, "monge");
let heroiNinja = new Heroi("Hanzo", 28, "ninja");

// 2. Chamando o método atacar para cada herói
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();