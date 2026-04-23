describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 10)
    
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('joao.silva@example.com')
    cy.get('#open-text-area')
      .should('be.visible')
      .type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    
    cy.get('.success').should('be.visible')
  })
})