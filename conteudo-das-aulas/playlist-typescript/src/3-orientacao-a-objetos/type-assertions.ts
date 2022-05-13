// type assertions

type JogoAssertion = {
    nome: string;
    descricao: string;
};

let jogo = {} as JogoAssertion;
jogo.nome = "Sekiro";
jogo.descricao = "descrição do jogo";
