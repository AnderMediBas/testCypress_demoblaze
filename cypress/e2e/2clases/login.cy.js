class login {
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

  //IMPLEMENTANDO METODOS

  openModal() {
    this.btnModalLogin().click(); //hacemos el llamado de los atributos del Modelo Login
    this.content_modal().should("be.visible");
  }
  closeModal() {
    this.btnCloseModalLogin().should("be.visible").click();
    this.content_modal().should("be.visible");
  }
  probandoButtonModal() {
    this.btnCloseModalLogin().should("be.visible").click();
  }
  validarLogin(user, pass) {
    this.content_modal().should("be.visible");
    this.inputUser().wait(1000).should("be.visible").type(user);
    this.inputPass().wait(1000).should("be.visible").type(pass);
    this.btnLogin().click();
  }
}

export default new login();
