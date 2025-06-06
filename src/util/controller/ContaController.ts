import { ContaRepository } from "../repository/Contarepository";
import { Conta } from "../Model/Conta";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta> (); 
    numero= 0; 
 
    procurarPorNumero(numero: number):void{
        let buscaConta= this.buscarnoArray(numero); 

        if(buscaConta != null ) {
            buscaConta.visualizar(); 
        } else {
        console.log("\nA conta numero:"+  numero + "não foi encontrada!"); 
        }

    }

    listarTodas(): void {
      for (let conta of this.listaContas) {
        conta.visualizar(); 
    }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta); 
        console.log("\nA Conta número " + conta.numero + " foi cadastrada com sucesso!");
       
    }

    atualizar(conta:Conta): void {
     let buscaConta = this.buscarnoArray(conta.numero); 

     if( buscaConta!= null){
        this.listaContas[ this.listaContas.indexOf(buscaConta)]=conta;
        console.log("\nA Conta número " + conta.numero + " foi atualizada com sucesso!");
     } else  {  
        console.log("\nA conta número: " + conta.numero + " não foi encontrada!"); 
     }
       
    }

    deletar(numero: number): void {

        let buscaConta = this.buscarnoArray(numero); 

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA conta número " + numero + " foi deletada com sucesso!");
        } else {
            console.log("\nA conta número: " + numero + " não foi encontrada!");
        }
    }
        

    sacar(numero: number, valor: number): void {
       
    let conta= this.buscarnoArray(numero);  
    if (conta != null) {

     if  ( conta.sacar(valor)== true)
         console.log("\nO saque de R$ " + valor + " foi realizado com sucesso na conta número: " + numero);
      } else {
            console.log("\nA conta número: " + numero + " não foi encontrada!");
        }   
    }

    depositar(numero: number, valor: number): void {

        let conta = this.buscarnoArray(numero);  

        if (conta != null) {
            conta.depositar(valor);
            console.log("\nO depósito de R$ " + valor + " foi realizado com sucesso na conta número: " + numero);
        } else {
            console.log("\nA conta número: " + numero + " não foi encontrada!");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarnoArray(numeroOrigem);  
        let contaDestino = this.buscarnoArray(numeroDestino);  

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor)== true) {
                contaDestino.depositar(valor);
                console.log("\nA transferência de R$ " + valor + " da conta número: " + numeroOrigem + " para a conta número: " + numeroDestino + " foi realizada com sucesso!");
            } else {
                console.log("\nSaldo insuficiente na conta número: " + numeroOrigem);
            }
        } else {
            console.log ("\nA conta numero: " + numeroOrigem + " ou a conta número: " + numeroDestino + " não foi encontrada!");
        }


      
    }
    gerarNumero(): number {
          // Incrementa o número da conta
        return ++ this.numero; // Retorna o novo número da conta
    }
    public buscarnoArray(numero: number): Conta | null {
        // Busca uma conta pelo número no array de contas
       for(let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta; // Retorna a conta encontrada
            }
        }
         return null; // Retorna null se a conta não for encontrada
        }
    
    }


