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
  content_modal() {
    return cy.get("#logInModal");
  }
  btnLogin() {
    return cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    );
  }
}

export default new loginModel();
