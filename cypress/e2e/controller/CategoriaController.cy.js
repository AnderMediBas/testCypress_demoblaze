import categoriaModelCy from "../model/categoriaModel.cy";

class CategoriaController {
  select_caregoria(nom_cat) {
    const categoria = categoriaModelCy.IngresarCategoria(nom_cat);
    categoria.click().wait(1000);
    return categoria;
  }

  navegarProduct(nom_cat) {
    this.select_caregoria(nom_cat);

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
      cy.get(".name").wait(1000).should("exist").and("be.visible  ");

      // Volver a la página de Phones para seguir con el siguiente producto
      cy.go("back").wait(1000);

      this.select_caregoria(nom_cat);
    });
  }
}
export default new CategoriaController();
