//Integrando la clase Login

import loginCy from "../simple/login.cy";

//DEfiniendo lo que se va a Testear(Agrupa Pruebas)
describe("Testeando Pagina DEMOBLAZE", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    loginCy.loadUserData();
  });
  //definiendo prueba en particular
    it("Debe de logear sin inconvenientes", () => {
        //Accion de la página que se está visitando
        loginCy.loginMultipleUsers();
        
    });
});
