//Integrando la clase Login
import loginCy from "../simple/login.cy";

//DEfiniendo lo que se va a Testear(Agrupa Pruebas)
describe("Testeando Pagina DEMOBLAZE", () => {
  //definiendo prueba en particular
    it("Debe de logear sin inconvenientes", () => {
        //Accion de la página que se está visitando
        cy.visit("https://www.demoblaze.com/index.html");

        //Usando los métodos de la clase login
        loginCy.openModal();
        loginCy.validarLogin("andermedib@gmail.com", "123456789");
    });
});
