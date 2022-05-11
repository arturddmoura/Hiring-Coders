let lista = [1, 2, 5];
let lista_incluir = [3, 4];

for (let i = 0; i < lista_incluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= lista_incluir[i]) {
            lista.splice(j, 0, lista_incluir[i]);
            j++;
        }
    }
}

console.log(lista);

const list_result = [1, 2, ...lista_incluir, 5];
list_result.push(6);

console.log(list_result);
