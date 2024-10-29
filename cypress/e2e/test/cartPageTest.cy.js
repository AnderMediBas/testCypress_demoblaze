import cartActionsCy from "../pages/actions/cartActions.cy";

describe("TESTER PAGE CART", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("DEBE DE AGREGAR AL CARRITO LOS PRODUCTOS SELECCIONADOS ", () => {
    cartActionsCy.add.Samsung_ga_s6();
    cartActionsCy.add.addMoreProduct();
    cartActionsCy.add.Asus_full_hd();
    cartActionsCy.add.addMoreProduct();
    cartActionsCy.add.Asus_full_hd();
  });
});
