/// <reference types="cypress" />

context('Side Panel', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should load side panel', () => {
        cy.getByDataTestId('side-panel-component').should('exist');
    });
})
