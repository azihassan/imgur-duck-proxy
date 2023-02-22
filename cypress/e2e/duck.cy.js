/// <reference types="cypress" />

describe("imgur-duck-proxy", () => {
  beforeEach(() => {
    cy.visit("test.html");
  });

  it("prepends duckduckgo prefix to imgur image src attributes", () => {
    cy.get("#static-image")
      .first()
      .should(
        "have.attr",
        "src",
        "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/aEFogmG.jpg"
      );
  });

  it("prepends duckduckgo prefix to imgur image src attributes inside iframes", () => {
    cy.get("iframe")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find("#static-image")
      .should(
        "have.attr",
        "src",
        "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/aEFogmG.jpg"
      );
  });

  it("prepends duckduckgo prefix to dynamically added imgur image src attributes", () => {
    cy.get("#dynamic-image")
      .first()
      .should(
        "have.attr",
        "src",
        "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/aEFogmG.jpg"
      );
  });

  it("prepends duckduckgo prefix to dynamically added imgur image src attributes inside iframes", () => {
    cy.get("iframe")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find("#dynamic-image")
      .should(
        "have.attr",
        "src",
        "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/aEFogmG.jpg"
      );
  });
});
