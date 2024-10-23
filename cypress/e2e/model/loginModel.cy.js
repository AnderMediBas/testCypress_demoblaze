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
  content_modal(modal) {
    return cy.get("#logInModal");
  }
  btnLogin() {
    return cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    );
  }
  btnCloseModalLogin() {
    return cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
    );
  }
}

export default new loginModel();
