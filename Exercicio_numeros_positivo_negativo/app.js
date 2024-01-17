// Exibe uma mensagem de alerta solicitando ao usuário que digite um número
alert('Digite um número');

// Solicita ao usuário que digite um número usando o sinal de subtração para representar números negativos
let numero = prompt('Digite um número usando o sinal de subtração exemplo: -4 para número negativo');

// Exibe no console o número digitado pelo usuário
console.log('O número digitado é:', numero);

// Verifica se o número é maior ou igual a zero
if (numero >= 0) {
    // Se o número for maior ou igual a zero, exibe um alerta indicando que o número é positivo
    alert('Número é positivo! ' + numero);
} else {
    // Se o número for negativo, exibe um alerta indicando que o número é negativo
    alert('Número negativo: ' + numero);
}

