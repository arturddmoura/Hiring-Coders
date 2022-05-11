let isValid = true;

//sem ternário
function verify(isValid) {
    if (isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

//com ternario
const result = isValid ? true : false;

let zero = 0;

const numero_resultado = zero == 0 ? 0 : -1;

console.log(numero_resultado);
