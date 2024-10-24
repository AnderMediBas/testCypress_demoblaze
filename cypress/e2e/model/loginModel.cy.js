class loginModel {
  inputUser() {
    return cy.get("#loginusername");
  }

  inputPass() {
    return cy.get("#loginpassword");
  }

  btnModalLogin() {
    return cy.get("#login2");
  }

  contentModal() {
    return cy.get("#logInModal");
  }

  btnLogin() {
    return cy.get("#logInModal .btn-primary");
  }
}

export default new loginModel();
