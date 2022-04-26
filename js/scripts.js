/**
 * site de referencia para o código: http://www.devin.com.br/calculadoras-javascript/
 * excelente tutorial
 */

//função responsavel por capturar o valor do operador e tratar os valores
function operadorTraid(operador) {
    var valor = document.calcform.visor.value;
    delete gvisor;

    if (typeof operador != 'undefined' && operador == 'resultado') {
        auxValor = executaOperacao(auxOperador, auxValor, valor);
        document.calcform.visor.value = auxValor;
        delete operador;
        delete auxValor;
        return (0);
    }

    if (typeof auxValor != 'undefined') {
        auxValor = executaOperacao(auxOperador, auxValor, valor);
        auxOperador = operador;
        document.calcform.visor.value = auxValor;
    } else {
        auxValor = valor;
        auxOperador = operador;
    }

}
//atualiza o valor da variavel de buffer do numero atual e atualiza o vizor
function incrementaNumero(num) {
    if (typeof gvisor == 'undefined') {
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
}

function calcLimpar() {
    document.calcform.visor.value = '';
    delete auxValor;
    delete auxOperador;
    delete gvisor;
}

function executaOperacao(oper, valor1, valor2) {
    switch (oper) {
        case "somar":
            var valor = parseFloat(valor1) + parseFloat(valor2);
            break;
        case "subtrair":
            var valor = parseFloat(valor1) - parseFloat(valor2);
            break;
        case "dividir":
            var valor = parseFloat(valor1) / parseFloat(valor2);
            break;
        case "multiplicar":
            var valor = parseFloat(valor1) * parseFloat(valor2);
            break;
        default:
            break;
    }
    return (valor);
}