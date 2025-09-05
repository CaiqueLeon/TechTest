describe('Testes com usuário admin', () => {
    let userData;

    before(() => {
        // Definindo os dados do usuário dinamicamente com o Date.now
        userData = {
            nome: "Fulano da Silva",
            email: `fulano.${Date.now()}@qa.com`,
            password: "teste",
            administrador: "true"
        };

        // Criação do usuário apenas uma vez
        cy.api({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/usuarios`,
            body: userData,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(201);
            // Salvar id retornado para usar nos outros testes
            userData.id = res.body._id;
        });
    });

    it('API - Listar usuários cadastrados', () => {
        cy.api({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/usuarios`
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    it('API - Deve buscar o usuário admin pelo ID', () => {
        cy.api({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/usuarios/${userData.id}`
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.email).to.eq(userData.email);
        });
    });

    it('API - Deve realizar login com sucesso', () => {
        cy.loginSucess(userData.email, userData.password).then((token) => {
            // aqui você já tem o token disponível para os próximos testes
            cy.log('Token gerado:', token);
            expect(token).to.include('Bearer');
        })
    });
});