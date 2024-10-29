class cartPageLocators {
  locator = {
    productName:()=>cy.get(".name "),
    submitAddCar:()=>cy.get(".col-sm-12 > .btn"),
    cartLink:()=>cy.get("#cartur"),
    homeLink:()=>cy.get(".active > .nav-link"),
    removeProduct:()=>cy.get("#tbodyid >.success> td>a"),
  };
}

export default new cartPageLocators();
