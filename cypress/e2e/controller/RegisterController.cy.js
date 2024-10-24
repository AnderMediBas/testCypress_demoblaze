import RegisterModelCy from "../model/RegisterModel.cy";

RegisterModelCy;
class RegisterController {
  // GENERAMOS MÉTODOS PARA HACER LAS OPERACIONES DE LAS PRUEBAS
  openModal(btnModal, modalContent) {
    btnModal.click();
    modalContent.should("exist").and("be.visible"); //hacemos el llamado de los atributos del Modelo Login
  }

  validarDatos(user, pass) {
    this.openModal(RegisterModelCy.btnModalRegistro(),RegisterModelCy.content_modal_reg());
    RegisterModelCy.inputUser().wait(1000).type(user).should("be.visible");
    RegisterModelCy.inputPass().wait(1000).type(pass).should("be.visible");
    RegisterModelCy.btnRegistro().click();
  }
}
export default new RegisterController();
