import { ContaPoupanca } from './src/util/Model/Contapoupança';
import { ContaCorrente } from './src/util/Model/Contacorrente';
import { colors } from './src/util/Colors';
import leia from "readline-sync"
import {  Conta } from './src/util/Model/Conta';


export function main() {
    let opcao: number;


const contaCorrente: ContaCorrente = new ContaCorrente(1, 123, 1, "Giulia", 15000, 1000); //
    contaCorrente.visualizar();     
    contaCorrente.sacar(15000);
    contaCorrente.visualizar();
    contaCorrente.depositar(1000);
    contaCorrente.visualizar();

 const contaPoupanca: ContaPoupanca = new ContaPoupanca(2, 123, 2, "João", 1000, 10); //
    contaPoupanca.visualizar();     
    contaPoupanca.sacar(200);
    contaPoupanca.visualizar();
    contaPoupanca.depositar(1000);
    contaPoupanca.visualizar();




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

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

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