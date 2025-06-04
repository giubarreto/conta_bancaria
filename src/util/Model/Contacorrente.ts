import { Conta } from "./Conta";


export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, 
        saldo: number, limite: number) {// Construtor da classe ContaCorrente
        super(numero, agencia, tipo, titular, saldo);// Chama o construtor da classe pai Conta
        this._limite = limite;// Limite de crédito da conta corrente
    }
    
    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {// Define o limite de crédito da conta corrente
        this._limite = limite;// Atribui o valor do limite
    }

     public sacar(valor: number): boolean {// Método para sacar dinheiro da conta corrente

        if ((this.saldo + this._limite) < valor) {// Verifica se o saldo mais o limite é menor que o valor do saque
            console.log("\n Saldo Insuficiente!");
            return false;// Se for, exibe mensagem de saldo insuficiente e retorna falso
        }//

        this.saldo = this.saldo - valor;
        return true;// Se o saque for possível, atualiza o saldo e retorna verdadeiro
    }

    public visualizar(): void {
        super.visualizar();// Chama o método visualizar da classe pai Conta
        console.log("Limite: " + this._limite.toFixed(2));// Exibe os detalhes da conta corrente, incluindo o limite
    }

}