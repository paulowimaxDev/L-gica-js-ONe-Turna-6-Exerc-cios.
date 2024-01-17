// Exibe uma mensagem de título para o usuário usando 'alert'
alert('Contador de 10 até 0:');

// Inicializa a variável 'contador' com o valor 10
let contador = 10;

// Inicia um loop 'while' que continua enquanto 'contador' for maior ou igual a 0
while (contador >= 0) {
    // Exibe um alerta informando o valor atual do contador
    alert(`Meu contador agora tem o valor de: ${contador}`);

    // Exibe no console o valor atual do contador
    console.log('Meu número agora é:', contador);

    // Decrementa o valor do contador em 1 para a próxima iteração do loop
    contador--;
}

