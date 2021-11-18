describe ('', () => {
    it ('', () => {
    cy.visit('https://react-redux.realworld.io/#/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('test+5@qa.team')
    cy.get(':nth-child(2) > .form-control').type('Qwerty123!')
    cy.get('.btn').click();
    cy.get('.navbar').contains('tes').should('exist');
    });
    
    });