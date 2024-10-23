class RegisterModel {
  inputUser() {
    return cy.get("#sign-username");
  }

  inputPass() {
    return cy.get("#sign-password");
  }

  btnModalRegistro() {
    return cy.get("#signin2");
  }

  content_modal_reg() {
    return cy.get("#signInModal");
  }

  btnRegistro() {
    return cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    );
  }
}

export default new RegisterModel();
