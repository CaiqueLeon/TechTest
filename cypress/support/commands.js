
//Web hooks
Cypress.Commands.add('setUserAdmin', (admin = true) => {
  if (admin) {
    cy.get('input[data-testid="checkbox"]').check();
  }
});

Cypress.Commands.add('assertHome', () => {
  cy.contains('h1', 'Serverest Store').should('be.visible');
});


// API hooks

Cypress.Commands.add('loginSucess', (email, password) => {
  return cy.api({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/login`,
    body: {
      email,
      password
    }
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.have.property('message', 'Login realizado com sucesso');
    expect(res.body).to.have.property('authorization').and.to.include('Bearer');
    return res.body.authorization; // retorna o token para ser usado depois
  });
});