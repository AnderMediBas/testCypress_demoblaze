class LocatorModel{

    locatorLogin={
        btnModalLogin:()=> cy.get('#login2'),
        inputUserLogin:()=> cy.get('#loginusername'),
        inputPasswordLogin:()=> cy.get('#loginpassword'),
        btnLogin:()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        contentModalLogin:()=> cy.get('#logInModal')
    }
    locatorSignin={
        btnModalSign_in:()=> cy.get('#signin2'),
        inputUserSign_in:()=> cy.get('#sign-username'),
        inputPasswordSign_in:()=> cy.get('#sign-password'),
        btnSign_in:()=> cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        contentModalSign_in:()=> cy.get('#signInModal')
    }
    locatorCategory={
        SubmitCategory:(category)=> cy.get("[onclick=\"byCat('" + category + "')\"]"),
        linkProduct:() => cy.get(".card-block a")
    }
    
}
export default new LocatorModel