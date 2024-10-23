import RegisterModelCy from "../model/RegisterModel.cy";

RegisterModelCy
class RegisterController {
  // GENERAMOS MÉTODOS PARA HACER LAS OPERACIONES DE LAS PRUEBAS
  openModal() {
    RegisterModelCy.content_modal_reg().should("not.be.visible");
    RegisterModelCy.btnModalRegistro().click(); //hacemos el llamado de los atributos del Modelo Login
  }
  closeModal() {
    RegisterModelCy.btnModalRegistro().should("be.visible").click();
    RegisterModelCy.content_modal().should("be.visible");
  }
  probandoButtonModal() {
    RegisterModelCy.btnCloseModalLogin().should("be.visible").click();
  }
  validarDatos(user, pass) {
    RegisterModelCy.content_modal_reg().should("be.visible");
    RegisterModelCy.inputUser().wait(2000).should("be.visible").type(user);
    RegisterModelCy.inputPass().wait(2000).should("be.visible").type(pass);
    RegisterModelCy.btnRegistro().click();
  }
}
export default new RegisterController();
