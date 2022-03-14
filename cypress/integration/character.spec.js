/// <reference types="cypress"/>

context("Character Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Characters");
  });
  it("Check our characters", () => {
    cy.get("h3").contains("Morty")
  });
});
