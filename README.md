
# TechTest 🚀

Projeto de automação de testes desenvolvido com **Cypress** para Avaliação Técnica para o cargo de QA Automation Sênior.

## 📌 Descrição
Este projeto contém a automação de cenários de testes para validação de funcionalidades de API e UI.  
Foi desenvolvido com boas práticas de automação de testes, incluindo:
- Estrutura organizada de pastas
- Testes independentes
- Reutilização de código
- Uso de `specPattern` para melhor controle dos testes

## 🛠 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)  

## 🛠 Tecnologias Utilizadas
- [Plugins Utilizados] eslint-plugin-cypress e cypress-plugin-api

## 📂 Estrutura do Projeto
TechTest/
├── cypress/
│ ├── e2e/ # Testes end-to-end
│ ├── fixtures/ # Massa de dados
│ ├── support/ # Comandos customizados e configs
├── cypress.config.js
├── package.json
└── README.md


## ⚙️ Pré-requisitos
- Node.js instalado (>= 18)
- NPM ou Yarn instalado

## ▶️ Como executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/TechTest.git
   cd TechTest
2. Instale as dependências:

npm install
3. Execute os testes em modo interativo:
npx cypress open

4. Execute os testes em modo headless:
npx cypress run

✅ Funcionalidades Testadas
Login

Cadastro de usuários

Listagem de usuários

Validações de API

OBS: A pasta videos não foi adicionada ao arquivo .gitignore com intuido didático para mostrar os cenários sendo
executados previamente na Regressão dessa suit. 