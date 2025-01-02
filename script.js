//your JS code here. If required.
it('Checking Forward Typing', () => {
  // Type into the first input
  cy.get('#code-1').type('1');
  
  // Check if the focus moved to the second input
  cy.focused().should('have.id', 'code-2');
  
  // Continue typing
  cy.get('#code-2').type('2');
  cy.focused().should('have.id', 'code-3');
  
  // Ensure the third input is focused after typing
  cy.get('#code-3').type('3');
  cy.focused().should('have.id', 'code-4');
});
