class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    // #saldo = 0 // https://github.com/tc39/proposal-class-fields#private-
    fields
    agencia;
    _saldo = 0;


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) 
        {
            return;
        }            
        this._saldo += valor;
    }
}


const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 11122233310;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.rg = 88822233310;

const contaCorrenteRicardo = new ContaCorrente;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);


const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);