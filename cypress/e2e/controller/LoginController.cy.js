import loginModelCy from "../model/loginModel.cy";
class LogonController {
  // GENERAMOS MÉTODOS PARA HACER LAS OPERACIONES DE LAS PRUEBAS
  openModal() {
      loginModelCy.btnModalLogin().click(); //hacemos el llamado de los atributos del Modelo Login
      loginModelCy.content_modal().should("be.visible");
  }
  closeModal() {
    loginModelCy.btnCloseModalLogin().should("be.visible").click();
    loginModelCy.content_modal().should("be.visible");
  }
  probandoButtonModal() {
    loginModelCy.btnCloseModalLogin().should("be.visible").click();
  }
  validarLogin(user, pass) {
    loginModelCy.content_modal().should("be.visible");
    loginModelCy.inputUser().wait(2000).should("be.visible").type(user);
    loginModelCy.inputPass().wait(2000).should("be.visible").type(pass);
    loginModelCy.btnLogin().click();
  }
}

export default new LogonController();
