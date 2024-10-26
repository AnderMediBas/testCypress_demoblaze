
import loginActionsCy from "../pages/actions/loginActions.cy";

describe("TESTER PAGE HOME", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
    loginActionsCy.loadUserData();
  });
  it("Debe de logear con cada usuario resgistrado sin problema", () => {
    loginActionsCy.loginMultipleUsers();
  });
 
});
