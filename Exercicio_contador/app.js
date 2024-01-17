// Exibe uma mensagem de título para o usuário usando 'alert'
alert('Contador de 0 até 10:');

// Inicializa a variável 'contador' com o valor 0
let contador = 0;

// Inicia um loop 'while' que continua enquanto 'contador' for menor ou igual a 10
while (contador <= 10) {
    // Exibe um alerta informando o valor atual do contador
    alert(`Meu contador agora tem o valor de: ${contador}`);

    // Exibe no console o valor atual do contador
    console.log('Meu número agora é:', contador);

    // Incrementa o valor do contador em 1 para a próxima iteração do loop
    contador++;
}

