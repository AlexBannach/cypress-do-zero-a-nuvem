describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 10)
    
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('joao.silva@example.com')
    cy.get('#open-text-area').should('be.visible').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()
    
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('joao.silva@invalid-email')
    cy.get('#open-text-area').type('Teste de mensagem')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible') 
    })

    it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
      cy.get('#phone')
        .type('abcde')
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
      cy.get('#firstName').type('João')
      cy.get('#lastName').type('Silva')
      cy.get('#email').type('joao.silva@example.com')
      cy.get('#open-text-area').type('Teste de mensagem')
      cy.get('#phone-checkbox').click()
      cy.contains('button', 'Enviar').click()

      cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
      cy.get('#firstName')
        .type('João')
        .should('have.value', 'João')
        .clear()
        .should('have.value', '')
      cy.get('#lastName')
        .type('Silva')
        .should('have.value', 'Silva')
        .clear()
        .should('have.value', '')
      cy.get('#email')
        .type('joao.silva@example.com')
        .should('have.value', 'joao.silva@example.com')
        .clear()
        .should('have.value', '')
      cy.get('#phone')
        .type('1234567890')
        .should('have.value', '1234567890')
        .clear()
        .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', () => {
      cy.fillMandatoryFieldsAndSubmit()

      cy.get('.success').should('be.visible')
    })
})