class registerPageLocators{
    locator={
        btnModalSign_in:()=>cy.get('#signin2'),
        signUsername:()=>cy.get('#sign-username'),
        signPassword:()=>cy.get('#sign-password'),
        submitSignButton:()=>cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        contentModalSign_in:()=>cy.get('#signInModal'),

        

    }
}

export default new registerPageLocators