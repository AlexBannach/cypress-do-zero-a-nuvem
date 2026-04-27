Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Marcos',
    lastName: 'Antonio',
    email: 'novo@teste.com',
    message: Cypress._.repeat('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 10),
    phone: '1234567890'
}) => {
  cy.get('#firstName').type(data.firstName)
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email)
  cy.get('#open-text-area').should('be.visible').type(data.message, { delay: 0 })
  cy.get('#phone-checkbox').click()
  cy.get('#phone').type(data.phone)

  cy.contains('button', 'Enviar').click()
})