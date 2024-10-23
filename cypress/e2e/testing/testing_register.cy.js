import RegisterControllerCy from '../controller/RegisterController.cy';

describe("Registro tester", () => {
it("Verificar si se puede Registrar perfectamente", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
    RegisterControllerCy.openModal();
    RegisterControllerCy.validarDatos("andermedibmail.com",'1234');
    /* 
    RegisterControllerCy.validarDatos("andermedib@gmail.com", "1234567"); */
    });
});