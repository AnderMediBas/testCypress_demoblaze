import homeControllerCy from "../SimpleFunction/homeController.cy";

describe("TESTER PAGE HOME", () => {
  const user = "PepeLuchos";
  const pass = "user12345";

  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("Debe de registrarse sin problema", () => {homeControllerCy.Signin(user, pass);});
  it("Debe de logear sin problema", () => {homeControllerCy.Login(user, pass);});
  
  it("Debe de navegar en todos los productos de cada categoria", () => {
    ['phone','notebook','monitor'].forEach((categoria)=>{
        homeControllerCy.NavegarCategoria(categoria);
    })
  });

  
});
