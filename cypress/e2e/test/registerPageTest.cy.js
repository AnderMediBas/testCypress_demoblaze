
import registerActionsCy from "../pages/actions/registerActions.cy";

describe("TESTER PAGE HOME", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
    registerActionsCy.loadUserData();
  });

  it("Debe de registrarse sin problema", () => {
    registerActionsCy.siginMultipleUsers();
  });

});
