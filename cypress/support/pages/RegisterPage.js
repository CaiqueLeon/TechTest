
export default class RegisterPage {
  visit() {
    cy.visit('/cadastrarusuarios');
  }
  assertPaginaCadastro() {
    cy.get('h2.font-robot').should('contain.text', 'Cadastro');
  }

  submit() {
    cy.get('[data-testid="cadastrar"]').click();
  }

}