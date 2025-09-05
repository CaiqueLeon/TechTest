
export default class HomePage {
  addFirstProductToListAndCaptureName() {
    return cy.get('div.card.col-3').first().within(() => {
      cy.get('.card-title, [data-testid="product-name"]').first().invoke('text').then((t) => {
        cy.wrap((t || '').trim() || 'Produto').as('selectedProductName');
      });
      cy.get('[data-testid="adicionarNaLista"]').click();
    });
  }
}
