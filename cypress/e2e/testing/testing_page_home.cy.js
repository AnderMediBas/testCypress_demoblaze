import CategoriaControllerCy from "../controller/CategoriaController.cy.js";
import LoginControllerCy from "../controller/LoginController.cy.js";
import RegisterControllerCy from "../controller/RegisterController.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Modal is transitioning")) {
    return false; // Ignora este error en particular
  }
  return true; // Para otros errores, sigue fallando la prueba
});

describe("Testeando Page Home", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  /*********************************************** */

  //Dando valores con lo que vamos a hacer las pruebas
  const txtUser = "ander_aimarescorpio@hotmail.com";
  const txtpassword = "123456789";

  /************************************************ */
  //REGISTRO
  /* ********************************************* */

  it("Verificar registro de Usuario", () => {
    RegisterControllerCy.openModal();
    RegisterControllerCy.validarDatos(txtUser, txtpassword);
  });

  /* *************************************************** */
  //LOGIN
  /* *************************************************** */

  it("Debe iniciar sesion Correctamente", () => {
    LoginControllerCy.openModal();
    LoginControllerCy.validarLogin(txtUser, 123456789);
  });

  /* ***************************************************** */
  //CATEGORIA
  /* ***************************************************** */

  it("Debe de navegar por las opciones de categoria categorias", () => {
    CategoriaControllerCy.navegarProduct("phone");
    CategoriaControllerCy.navegarProduct("notebook");
    CategoriaControllerCy.navegarProduct("monitor");
  });
});
