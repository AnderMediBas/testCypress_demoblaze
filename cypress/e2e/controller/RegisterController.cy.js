import RegisterModelCy from "../model/RegisterModel.cy";

RegisterModelCy
class RegisterController {
  checkVisibility(element,visible=true){
    element.should(visible ? "be.visible": "not.be.visible");
  }

  // GENERAMOS MÉTODOS PARA HACER LAS OPERACIONES DE LAS PRUEBAS
  openModal() {
    this.checkVisibility(RegisterModelCy.content_modal_reg(),false) ;
    RegisterModelCy.btnModalRegistro().click(); //hacemos el llamado de los atributos del Modelo Login
  }
  
  probandoButtonModal() {
    RegisterModelCy.btnCloseModalLogin().should("be.visible").click();
  }
  validarDatos(user, pass) {
    this.checkVisibility(RegisterModelCy.content_modal_reg());
    RegisterModelCy.inputUser().wait(1000).type(user).should("be.visible");
    RegisterModelCy.inputPass().wait(1000).type(pass).should("be.visible");
    RegisterModelCy.btnRegistro().click();
  }
}
export default new RegisterController();
