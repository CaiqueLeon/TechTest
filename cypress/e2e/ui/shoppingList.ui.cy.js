
import LoginPage from '../../support/pages/LoginPage';
import HomePage from '../../support/pages/HomePage';

describe('Testes WEB na Lista de Compras', () => {
  const login = new LoginPage();
  const home = new HomePage();

  const user = {
    email: 'caiquetest11@test.com',
    senha: 'teste'
  }



  beforeEach(() => {
    login.visit();
    login.fill(user.email, user.senha);
    login.submit();
    cy.assertHome();
  });

  it('Adiciona o primeiro produto e valida na Lista de Compras', () => {
    home.addFirstProductToListAndCaptureName();
    cy.contains('h1', 'Lista de Compras').should('be.visible');
    cy.get('[data-testid="shopping-cart-product-name"]').first().invoke('text').then((t) => {
      const listedName = (t || '').trim();
      cy.get('@selectedProductName').then((n) => {
        expect(listedName.toLowerCase()).to.include((n || '').toLowerCase().slice(0, 3));
      });
    });
  });

  it('Limpa a lista de compras e valida a mensagem de vazio', () => {
    home.addFirstProductToListAndCaptureName();
    cy.get('[data-testid="limparLista"]').click();
    cy.get('[data-testid="shopping-cart-empty-message"]').should('contain.text', 'Seu carrinho está vazio');
  });
});
