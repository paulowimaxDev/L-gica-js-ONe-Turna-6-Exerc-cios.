// Exibe uma mensagem instruindo o usuário a digitar um número inteiro com dois dígitos
alert('Favor, digite um número inteiro com dois dígitos, Ex: 15');

// Solicita ao usuário que digite um número e armazena o valor em 'numeroUsuario'
let numeroUsuario = prompt('Digite seu número: ');

// Inicializa a variável 'contador'
let contador;

// Inicia um loop 'while' que continua enquanto 'numeroUsuario' for maior ou igual a 0
while (numeroUsuario >= 0) {
    // Exibe um alerta informando o valor atual de 'numeroUsuario'
    alert(`Número agora é: ${numeroUsuario}`);

    // Exibe no console o valor atual de 'numeroUsuario'
    console.log('Seu número agora é:', numeroUsuario);

    // Atribui o valor atual de 'numeroUsuario' a 'contador' e então decrementa 'numeroUsuario'
    contador = numeroUsuario--;
}

