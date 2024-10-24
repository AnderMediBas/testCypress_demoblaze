import categoriaModelCy from "../model/categoriaModel.cy";

class CategoriaController {
  navegarProduct(nom_cat) {
    categoriaModelCy.IngresarCategoria(nom_cat).click();

    cy.get(".card-block a").each(($el, index, $list) => {
      const productHref = $el.attr("href");
      expect(productHref).to.not.be.empty;
      cy.log(`Producto ${index + 1}: ${productHref}`);
      cy.visit(`https://www.demoblaze.com/${productHref}`);
      cy.wait(1000);
      cy.get(".name").wait(1000).should("exist").and("be.visible");
      cy.go("back");
    });
  }
}
export default new CategoriaController();
