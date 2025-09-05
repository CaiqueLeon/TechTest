
import LoginPage from '../../support/pages/LoginPage';
import RegisterPage from '../../support/pages/RegisterPage';

describe('Testes WEB de Login', () => {
  const loginPage = new LoginPage();
  const register = new RegisterPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.assertPaginaLogin();
  });
  //É preciso criar um usuário sem ser admin, via postman ou web, não foi criado cenário automatizado para criação de usuário normal
  const user = {
    email: 'caiquetest11@test.com',
    senha: 'teste'
  }

  const adminUser = {
    nome: 'Caique',
    email: `caique.${Date.now()}@qa.com`, 
    senha: 'Teste123'
  }


  it('Login com Usuário normal', () => {

    cy.get('[data-testid="email"]')
      .type(user.email);
    cy.get('[data-testid="senha"]')
      .type(user.senha);
    loginPage.submit();

    cy.assertHome();
    cy.get('[data-testid="carrinho"]').
      should('be.visible');
    cy.get('[data-testid="listar-usuarios"]').
      should('not.exist');
  });

  it('Login com Usuário Admin', () => {

    register.visit();
    cy.get('[data-testid="nome"]').type(adminUser.nome);
    cy.get('[data-testid="email"]').type(adminUser.email);
    cy.get('[data-testid="password"]').type(adminUser.senha);

    cy.setUserAdmin();
    register.submit();


    cy.get('[data-testid="listar-usuarios"]').click();
    cy.contains('h1, h2', 'Lista dos usuários').should('be.visible');
  });


});
