import loginPageLocatorsCy from "../locators/loginPageLocators.cy";
class loginActions {
  constructor() {
    this.userData = [];
  }
  loadUserData() {
    cy.fixture("example").then((data) => {
      this.userData = data; // Almacena los datos del fixture
    });
  }

  loginUser(username, password) {
    cy.get(loginPageLocatorsCy.locator.btnModalLogin).click();
    cy.get(loginPageLocatorsCy.locator.loginUsername).type(username);
    cy.get(loginPageLocatorsCy.locator.loginPassword).type(password);
    cy.get(loginPageLocatorsCy.locator.submitLoginButton).click();

    // Verifica que el usuario esté logueado correctamente
    /* cy.get(locators.auth.userWelcomeMessage).should('contain', `Welcome ${username}`) */
  }

  loginMultipleUsers() {
    this.userData.forEach((user) => {
      this.loginUser(user.username, user.userpassword);
      cy.reload(); // Recargar para el siguiente intento de login
    });
  }
}
export default new loginActions();
