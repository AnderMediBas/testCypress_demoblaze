class loginPageLocators{

    locator={
        btnModalLogin:() =>     cy.get('#login2'),
        loginUsername:() =>     cy.get('#loginusername'),
        loginPassword:() =>     cy.get('#loginpassword'),
        submitLoginButton:() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        contentModalLogin:() => cy.get('#logInModal')
    }
    
}
export default new loginPageLocators