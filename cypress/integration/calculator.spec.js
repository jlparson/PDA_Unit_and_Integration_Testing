describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the running total', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '7')
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '5')
  })

  it('should output positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '6')
  })

  it('should output negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '-2')
  })

  it('should output numbers with decimals', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '3.5')
  })

  it('should output very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '99980001')
  })

  it('should be divisible by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', 'undefined')
  })
})