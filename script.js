describe('OTP Verification', () => {
    beforeEach(() => {
        // Code to visit the OTP page or reset state if needed
        cy.visit('your-otp-page-url'); // Replace with the URL of your OTP page
    });

    it('Checking Rendering', () => {
        // Test to check if the OTP form renders correctly
        cy.get('#verification_heading').should('exist');
        cy.get('.code-container').should('exist');
    });

    it('Checking Forward Typing', () => {
        // Test to simulate typing in the OTP input fields and check if focus moves correctly
        cy.get('#code-1').type('1');
        cy.get('#code-2').should('have.focus'); // Check if the second input is focused
        cy.get('#code-2').type('2');
        cy.get('#code-3').should('have.focus'); // Check if the third input is focused
        cy.get('#code-3').type('3');
        cy.get('#code-4').should('have.focus'); // Check if the fourth input is focused
        cy.get('#code-4').type('4');
        cy.get('#code-5').should('have.focus'); // Check if the fifth input is focused
        cy.get('#code-5').type('5');
        cy.get('#code-6').should('have.focus'); // Check if the sixth input is focused
        cy.get('#code-6').type('6');
    });

    it('Checking Deletion', () => {
        // Test to simulate the deletion (Backspace) action
        cy.get('#code-6').type('6');
        cy.get('#code-6').should('have.value', '6');
        cy.get('#code-6').type('{backspace}');
        cy.get('#code-6').should('have.value', ''); // Check if the last input is cleared
        cy.get('#code-5').should('have.focus'); // Check if focus moves to the previous field after deletion
    });

    it('Checking Focus Behavior on Deletion', () => {
        // Test to check if the focus moves to previous input after backspace
        cy.get('#code-6').type('6');
        cy.get('#code-6').should('have.value', '6');
        cy.get('#code-6').type('{backspace}');
        cy.get('#code-5').should('have.focus'); // Focus should move to code-5 after backspace on code-6
    });

    it('Checking Paste Behavior', () => {
        // Test to simulate paste action and check if it fills all the fields
        cy.get('#code-1').type('1');
        cy.get('#code-2').type('2');
        cy.get('#code-3').type('3');
        cy.get('#code-4').type('4');
        cy.get('#code-5').type('5');
        cy.get('#code-6').type('6');

        cy.get('.code').each(($el, index, $list) => {
            cy.wrap($el).should('have.value', (index + 1).toString());
        });
    });
});
