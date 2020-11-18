class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 11122233310;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 88822233310;

cliente3.nome = "Gustavo";
cliente3.cpf = 66622233309;
cliente3.agencia = 1001;
cliente3.saldo = 0;
cliente3.rg = 66622233310;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);