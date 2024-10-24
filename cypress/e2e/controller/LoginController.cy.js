import loginModelCy from "../model/loginModel.cy";
class LogonController {
  openModal() {
    loginModelCy.btnModalLogin().click(); //hacemos el llamado de los atributos del Modelo Login
    loginModelCy.contentModal().should("be.visible");
  }

  validarLogin(user, pass) {
    loginModelCy.contentModal().should("be.visible");
    loginModelCy.inputUser().wait(1000).should("be.visible").type(user);
    loginModelCy.inputPass().wait(1000).should("be.visible").type(pass);
    loginModelCy.btnLogin().click();
  }
}

export default new LogonController();
