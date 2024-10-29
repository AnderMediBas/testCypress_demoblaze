//Importamos la instancia de la clase Login desde el archivo donde fue definida
import loginActionsCy from "../pages/actions/loginActions.cy";

describe("TESTER PAGE HOME", () => {

  //Antes de cada prueba, visitamos la página y cargamos los datos de usuarios
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");// Carga la página principal
    loginActionsCy.loadUserData();// Carga los datos de usuario desde el fixture
  });
  it("Debe de logear con cada usuario resgistrado sin problema", () => {
    //Ejecuta la función para iniciar sesión con múltiples usuarios
    loginActionsCy.loginMultipleUsers();
  });
});
