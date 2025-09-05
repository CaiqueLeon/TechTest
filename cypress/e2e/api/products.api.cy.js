
describe('Testes de API - Validação de Produtos', () => {
  let token;

  const userData = {
    nome: "Fulano da Silva",
    email: `fulano.${Date.now()}@qa.com`,
    password: "teste",
    administrador: "true"
  }

  const product = {
    nome: `Logitech MX${Date.now()}Vertical`,
    preco: 470,
    descricao: "Mouse",
    quantidade: 2
  }


  before(() => {

    // cria o usuário
    cy.api({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: userData,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(201);
    });

    // faz login e guarda o token (retorna "Bearer ...")
    cy.loginSucess(userData.email, userData.password).then((t) => {
      // agora token fica disponível pros testes desta suite
      token = t;
      expect(token).to.include('Bearer');
    });
  });

  it('Cadastrar produto com sucesso', () => {
    cy.api({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/produtos`,
      headers: { Authorization: token },
      body: product,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('_id');
    });
  });


});