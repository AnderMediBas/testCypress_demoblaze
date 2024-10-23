class categoriaModel{
    IngresarCategoria(categoria){
        return cy.get('[onclick="byCat(\''+categoria+'\')"]');
    }
    
    
}

export default new categoriaModel