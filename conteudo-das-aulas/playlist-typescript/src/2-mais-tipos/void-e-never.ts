function principal() {
    console.log("executando");
}

principal();

//laços de repetições infinitos ou funções que disparam erros
function funcao_que_nao_retorna(): never {
    throw new Error("Olá! ");
}

funcao_que_nao_retorna();
