
import RegisterPage from '../../support/pages/RegisterPage';

describe('Cadastro de usuário WEB', () => {
  const register = new RegisterPage();

  beforeEach(() => {
    register.visit();
    register.assertPaginaCadastro();
  });

  it('Validação do compo Nome obrigatório ao cadastrar usuário', () => {
    cy.get('[data-testid="email"]').type('caiquetest@test.com');
    cy.get('[data-testid="password"]').type('Teste@123');
    register.submit();
    cy.get('.alert.alert-secondary.alert-dismissible span').contains('Nome é obrigatório').should('be.visible');
  });

  it('Validação do compo Email obrigatório ao cadastrar usuário', () => {
    cy.get('[data-testid="nome"]').type('caique');
    cy.get('[data-testid="password"]').type('Teste@123');
    register.submit();
    cy.get('.alert.alert-secondary.alert-dismissible span').contains('Email é obrigatório').should('be.visible');
  });

  it('Validação do compo Senha obrigatória ao cadastrar usuário', () => {
    cy.get('[data-testid="nome"]').type('caique');
    cy.get('[data-testid="email"]').type('caiquetest@test.com');
    register.submit();
    cy.get('.alert.alert-secondary.alert-dismissible span').contains('Password é obrigatório').should('be.visible');
  });
});