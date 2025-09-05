
export default class LoginPage {
  visit() {
    cy.visit('/login');
  }
  assertPaginaLogin() {
    cy.get('h1.font-robot').should('contain.text', 'Login');
  }

  fill(email, senha) {
    cy.get('[data-testid="email"]')
      .type(email);
    cy.get('[data-testid="senha"]')
      .type(senha);
  }

  submit() {
    cy.get('[data-testid="entrar"]')
      .click();
  }
}