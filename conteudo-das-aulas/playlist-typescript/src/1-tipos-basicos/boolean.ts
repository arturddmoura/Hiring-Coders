let ativo: boolean;

ativo = true;

function status_user(status: boolean) {
    if (status) {
        return `Usuário está ativo`;
    } else {
        return `Usuário NÃO está ativo`;
    }
}

console.log(status_user(true));
