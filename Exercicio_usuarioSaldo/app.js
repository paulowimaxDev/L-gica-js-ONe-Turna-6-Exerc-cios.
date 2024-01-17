// Exibe uma mensagem de resumo de saldo em conta usando 'alert'
alert('Resumo de saldo em conta:');

// Solicita ao usuário que digite seu nome e armazena o valor em 'nomeUsuario'
let nomeUsuario = prompt('Digite seu nome:');

// Solicita ao usuário que digite um valor para depósito e armazena o valor em 'deposito'
let deposito = prompt('Favor digitar um valor para depósito');

// Inicializa 'saldoDaConta' com o valor do depósito (é importante validar e tratar a entrada do usuário para garantir que seja um número)
let saldoDaConta = deposito;

// Exibe um alerta informando que o depósito foi realizado com sucesso
alert('Depósito realizado com sucesso!');

// Exibe um alerta personalizado com o nome do usuário e o saldo da conta usando interpolação de string
alert(`Olá Sr. ${nomeUsuario}, seu saldo em conta é de: R$ ${saldoDaConta} reais`);

