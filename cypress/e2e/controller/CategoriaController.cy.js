import categoriaModelCy from "../model/categoriaModel.cy";

class CategoriaController {
  select_caregoria() {
    
  }
  select_notebook() {
    categoriaModelCy.btn_cat_notebook().click().wait(2000);
  }
  select_monitor() {
    categoriaModelCy.btn_cat_monitor().click().wait(2000);
  }

  navegarProduct(nom_cat) {

    categoriaModelCy.IngresarCategoria(nom_cat).click().wait(1000);

    cy.get(".card-block a").each(($el, index, $list) => {
      // Capturar el href de cada producto
      const productHref = $el.attr("href");

      // Verificar que el href existe
      expect(productHref).to.not.be.empty;

      // Imprimir el href en la consola
      cy.log(`Producto ${index + 1}: ${productHref}`);

      // Navegar al producto
      cy.visit(`https://www.demoblaze.com/${productHref}`);
      cy.wait(1000);  
      // Verificar que la página del producto cargue correctamente
      cy.get(".name").should("be.visible");

      // Volver a la página de Phones para seguir con el siguiente producto
      cy.go("back") . wait(1000);
      categoriaModelCy.IngresarCategoria(nom_cat).click().wait(1000);
    });
  }
}
export default new CategoriaController();
