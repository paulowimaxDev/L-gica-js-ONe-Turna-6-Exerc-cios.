// Exibe uma mensagem de alerta para o usuário
alert('Qual é o dia da semana');

// Solicita ao usuário para digitar um dia da semana e armazena a entrada em 'diaDaSemana'
let diaDaSemana = prompt('Digite um dia da semana');

// Exibe no console o dia selecionado pelo usuário
console.log('Dia selecionado foi:', diaDaSemana);

// Verifica se o dia selecionado é 'sabado'
if (diaDaSemana === 'sabado') {
    // Se for 'sabado', exibe uma mensagem desejando um bom final de semana
    alert('Bom final de semana');
} else if (diaDaSemana === 'domingo') {
    // Se não for 'sabado' mas for 'domingo', exibe a mesma mensagem desejando um bom final de semana
    alert('Bom final de semana');
} else {
    // Se não for nem 'sabado' nem 'domingo', exibe uma mensagem desejando uma boa semana
    alert('Boa semana');
}


