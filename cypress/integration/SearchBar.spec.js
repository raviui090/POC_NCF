/// <reference types="cypress" />

context('Search Bar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('should load search bar', () => {
        cy.getByDataTestId('search-bar-component').should('exist');
    });
  })
  