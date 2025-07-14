# 💰 Projeto Conta Bancária


Simulação de um sistema bancário com criação, listagem, atualização, exclusão, saques, depósitos e transferências entre contas. Desenvolvido com Programação Orientada a Objetos em TypeScript, utilizando o terminal com a biblioteca readline-sync.

🚀 Funcionalidades
✔️ Criar contas (Corrente ou Poupança)
✔️ Listar todas as contas cadastradas
✔️ Buscar conta por número
✔️ Atualizar dados da conta
✔️ Deletar conta
✔️ Sacar e depositar valores
✔️ Transferir entre contas
✔️ Interface no terminal com menu interativo
✔️ Estilização com cores usando ANSI Escape Codes

## 🧠 Conceitos Aplicados
Programação Orientada a Objetos (POO)

Herança entre classes (Conta, ContaCorrente, ContaPoupanca)

Polimorfismo

Encapsulamento

Modularização do código

Input de dados com readline-sync

Estilização de texto no terminal com cores

Manipulação de listas com objetos

Lógica de controle bancário

# 🗂️ Estrutura do Projeto
css
Copiar
Editar
.
├── src
│   └── util
│       ├── Colors.ts           # Cores para terminal
│       ├── controller
│       │   └── ContaController.ts
│       └── Model
│           ├── Conta.ts
│           ├── ContaCorrente.ts
│           └── ContaPoupanca.ts
├── Menu.ts (main.ts)

# 🏦 Tipos de Conta
Conta Corrente
Possui um limite de crédito

Permite saque mesmo com saldo negativo (até o limite)

Conta Poupança
Possui um dia de aniversário

Ideal para simulação de rendimentos futuros

# 📦 Como Executar
Pré-requisitos
Node.js instalado

TypeScript e ts-node

Passos:
bash
Copiar
Editar
# 1. Clonar o repositório
git clone https://github.com/giubarreto/conta_bancaria.git

# 2. Acessar o diretório
cd conta_bancaria

# 3. Instalar dependências
npm install

# 4. Executar o projeto
 ts-node Menu.ts
# 💻 Exemplo do Menu no Terminal
 *****************************************************
                BANCO DO BRAZIL COM Z                
*****************************************************
            1 - Criar Conta                          
            2 - Listar todas as Contas               
            3 - Buscar Conta por Numero              
            4 - Atualizar Dados da Conta             
            5 - Apagar Conta                         
            6 - Sacar                                
            7 - Depositar                            
            8 - Transferir valores entre Contas      
            9 - Sair                                 
*****************************************************

🧑‍💻 Desenvolvedora
Giulia Salgado Barreto
Generation Brasil
