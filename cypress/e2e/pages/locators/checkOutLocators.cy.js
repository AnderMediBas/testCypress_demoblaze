class checkOutLocators{
    locators={
        openCheckOut:   ()=>cy.get('.col-lg-1 > .btn'),
        inputName:      ()=>cy.get("#name"),
        inputCountry:   ()=>cy.get("#country"),
        inputCity:      ()=>cy.get("#city"),
        inputCard:      ()=>cy.get("#card"),
        inputMonth:     ()=>cy.get("#month"),
        inputYear:      ()=>cy.get("#year"),
        btnRegistrarCheckOut: ()=>cy.get("#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary")
    }
}
export default new checkOutLocators;