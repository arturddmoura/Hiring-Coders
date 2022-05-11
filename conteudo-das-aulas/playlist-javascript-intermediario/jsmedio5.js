const pessoa = {
    nome: "Artur",
    sobrenome: "Moura",
    idade: "26",
    profissão: "Tradutor",
};

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissão;

let { nome, sobrenome, idade, profissão } = pessoa;
console.log(nome, sobrenome, idade, profissão);
