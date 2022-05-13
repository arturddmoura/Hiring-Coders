//classes e funções
class Usuario {
    public nome;
    public idade;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;

    constructor(nome: string, idade: number, jogo: string) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizer_o_jogo() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }

    static que_horas_sao() {
        return Date();
    }
}

const jogador = new Player("Artur", 26, "Sekiro");
console.log(jogador.dizer_o_jogo());
console.log(Player.que_horas_sao());

//private, protected, public
class Jogo {
    public nome;
    constructor(nome: string) {
        this.nome = nome;
    }

    dizer_nome() {
        return `O nome do jogo é ${this.nome}`;
    }
}
// interfaces
interface i_jogocomdescricao {
    nome: string;
    descricao: string;
    dizer_nome_com_descricao(): string;
}

//implements
class jogo_com_descricao extends Jogo implements i_jogocomdescricao {
    public descricao;

    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizer_nome_com_descricao() {
        return `O nome do jogo é ${this.nome}`;
    }
}
const sekiro = new jogo_com_descricao("Sekiro", "É um jogo muito legal.");
console.log(sekiro.dizer_nome());
