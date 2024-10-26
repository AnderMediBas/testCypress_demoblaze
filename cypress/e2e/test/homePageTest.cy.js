import homeActionsCy from "../pages/actions/homeActions.cy";


describe("TESTER PAGE HOME", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("Debe de cambiar la lista de productos, al cambiar las categorias", () => {
    homeActionsCy.selectCategoriaphone(); 
    homeActionsCy.selectCategoriaLaptop();
    homeActionsCy.selectCategoriaMonitor();
  });

  it('Debe de ingresar al primer producto', () => {
      homeActionsCy.selectSamsung_Ga_S6();
      cy.go(-1);
      homeActionsCy.selectNokia_Lu_1520();
      cy.go(-1);
  }); 
});
