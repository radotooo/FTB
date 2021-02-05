/// <reference types="cypress" />

describe('Newsfeed', () => {
  beforeEach(() => {
    cy.visit('https://template3.booost.bg/newsfeed');
  });

  it('to be selected in the left nav menu', () => {
    cy.get(
      '#navigation-widget-small > .menu > .active > .menu-item-link'
    ).should('have.attr', 'data-title', 'Newsfeed');
  });

  it('font size to be at least 400', () => {
    cy.get('.section-banner')
      .should('have.css', 'font-weight')
      .then(parseFloat)
      .and('be.gte', 400);
  });

  it('banner title font should be bigger than banner text font', () => {
    cy.get('.section-banner-title')
      .should('have.css', 'font-weight')
      .then(parseFloat)
      .then((title) => {
        cy.get('.section-banner-text')
          .should('have.css', 'font-weight')
          .then(parseFloat)
          .and('be.below', title);
      });
  });

  it.only('can type in post text field', () => {
    cy.get('[data-cy=quick-post-text]')
      .type('hello')
      .invoke('val')
      .should('eql', 'hello');
  });

  it('scrollbar works', () => {
    cy.window().scrollTo('bottom').its('scrollY').should('not.equal', 0);
  });
});
