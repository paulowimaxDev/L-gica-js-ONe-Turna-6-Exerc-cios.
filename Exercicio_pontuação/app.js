// Exibe uma mensagem de boas-vindas ao usuário no alerta
alert('Seja bem-vindo ao Jogo de Pontuação!');

// Define uma pontuação-alvo para o jogo
let pontuacao = 100;

// Solicita ao jogador que digite sua pontuação e armazena o valor em 'pontosDoJogador'
let pontosDoJogador = prompt('Digite sua pontuação!');

// Verifica se a pontuação do jogador é maior ou igual à pontuação-alvo
if (pontosDoJogador >= pontuacao) {
    // Se a pontuação do jogador for igual ou superior à pontuação-alvo, exibe uma mensagem de parabéns
    alert('Parabéns, você ganhou!');
} else {
    // Se a pontuação do jogador for inferior à pontuação-alvo, exibe uma mensagem incentivando a tentar novamente
    alert('Tente novamente para ganhar!');
}

