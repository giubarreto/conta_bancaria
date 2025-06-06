import { ContaPoupanca } from './src/util/Model/Contapoupança';
import { ContaCorrente } from './src/util/Model/Contacorrente';
import { colors } from './src/util/Colors';
import leia from "readline-sync"
import {  Conta } from './src/util/Model/Conta';
import { ContaController } from './src/util/controller/ContaController';


export function main() {


    let contas: ContaController = new ContaController; // Instância da classe Conta
    let opcao, numero, agencia, tipo,saldo, limite, aniversario,valor, numeroDestino : number;
    let titular: string;
    const tiposContas=[ "Conta Corrente", "conta poupança" ]// Tipo de conta, pode ser alterado para Conta Poupança


console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();


    while (true) {
         console.log(colors.bg. black, colors.fg.magentastrong, 
        "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
         console.log("                                                     ", 
        colors.reset);
        
        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");
     
        if(opcao==9){
        console.log (colors.fg.cyanstrong, 
          "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
          sobre();
        console.log(colors.reset, "");
          process.exit(0);

        }

          switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("digite  o número da agencia: ");
                agencia = leia.questionInt("");

                console.log("digite o nome do titular da conta: ");
                titular = leia.question();

                console.log("digite o tipo de conta: \n1 - Conta Corrente \n2 - Conta Poupança");
                tipo = leia.keyInSelect(tiposContas, " ",{cancel: false}) + 1; 
                
                console.log("digite o saldo da conta (R$): ");
                saldo = leia.questionFloat("");



                switch (tipo) {
                    case 1: 
                    console.log("digite o limite da conta (R$):");
                        limite = leia.questionFloat("");
                         contas.cadastrar( 
                            new ContaCorrente(contas.gerarNumero(), agencia,tipo,titular, saldo, limite));
                        break;
                     case 2:
                    console.log("digite o dia do aniversario da conta: ");
                        aniversario = leia.questionInt("");
                        contas.cadastrar( 
                            new ContaPoupanca(contas.gerarNumero(), agencia,tipo,titular, saldo, aniversario));
                        break;
                        }
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas(); // Chama o método listarTodas da classe ContaController

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                console.log("Digite o número da conta que deseja consultar: "); 
                numero = leia.questionInt("");
                contas.procurarPorNumero(numero); 

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o número da conta : ");
                numero = leia.questionInt("");
                let conta = contas.buscarnoArray(numero); 

                if (conta != null) {
                    console.log("Digite o número da agência: ");
                    agencia = leia.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = leia.question();


                    tipo= conta.tipo;

                    console.log("Digite o saldo da conta (R$): ");
                    saldo = leia.questionFloat("");

                    switch (tipo) {
                        case 1: 
                        console.log("Digite o limite da conta (R$):");
                            limite = leia.questionFloat("");    
                            contas.atualizar( 
                            new ContaCorrente(numero, agencia,tipo,titular, saldo, limite));
                             break
                        case 2:
                        console.log("Digite o dia do aniversário da conta: ");     
                            aniversario = leia.questionInt("");
                            contas.atualizar( 
                            new ContaPoupanca(numero, agencia,tipo,titular, saldo, aniversario));
                            break;
                    }

                    } else{
                        console.log("\nA conta número: " + numero + " não foi encontrada!");
                    }
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o número da conta que deseja apagar: ");
                numero = leia.questionInt("");  
                contas.deletar(numero); 

                break;
                    
            case 6:
                console.log("\n\nSaque\n\n");
                console.log("Digite o número da conta: ");
                numero = leia.questionInt("");

                console.log("Digite o valor do saque (R$): ");
                valor = leia.questionFloat("");

                contas.sacar(numero, valor);

                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                console.log("Digite o número da conta: ");
                numero = leia.questionInt("");      

                console.log("Digite o valor do depósito (R$): ");
                valor = leia.questionFloat("");

                contas.depositar(numero, valor);
        

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                console.log("Digite o número da conta de origem: ");
                numero = leia.questionInt("");

                console.log("Digite o número da conta de destino: ");
                numeroDestino = leia.questionInt("");


                console.log("Digite o valor do deposito (R$): ");
                valor = leia.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

  export function sobre(): void {

    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Giulia Salgado Barreto ");
    console.log("Generation Brasil - giuliab@genstudents.org");
    console.log("https://github.com/giubarreto/conta_bancaria.git");
    console.log("*****************************************************");
}

main();



