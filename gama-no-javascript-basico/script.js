function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        //validação do primeiro digito
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        resultado = (soma * 10) % 11;

        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //validação do segundo dígito
        var numeros_cont = numeros + digitos[0];

        var soma_cont = 0;
        for (var i = 11; i > 1; i--) {
            soma_cont += numeros_cont.charAt(11 - i) * i;
        }
        resultado = (soma_cont * 10) % 11;

        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
}

function validacao() {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var cpf = document.getElementById("cpf_digitado").value;

    var resultado_validacao = validaCPF(cpf);

    if (resultado_validacao) {
        document.getElementById("success").style.display = "block";
    } else if (!resultado_validacao) {
        document.getElementById("error").style.display = "block";
    }
}
