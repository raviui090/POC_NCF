/// <reference types="cypress" />

context('Load Application', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('App should load', () => {
        cy.get('.App').should('exist');
    });
  })
  