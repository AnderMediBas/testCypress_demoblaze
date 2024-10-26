import registerPageLocatorsCy from "../locators/registerPageLocators.cy";



class registerActions{
    
    constructor(){
        this.userData = [];
    }
    loadUserData() {
        cy.fixture('example').then((data) => {
         return this.userData = data; // Almacena los datos del fixture
        });
    }

    signUser(username,password){
        cy.get(registerPageLocatorsCy.locator.btnModalSign_in).click();
        cy.get(registerPageLocatorsCy.locator.signUsername).type(username);
        cy.get(registerPageLocatorsCy.locator.signPassword).type(password);
        cy.get(registerPageLocatorsCy.locator.submitSignButton).click();
    }
    siginMultipleUsers() {
        this.userData.forEach((user) => {
            this.signUser(user.username, user.userpassword);
            cy.reload(); // Recargar para el siguiente intento de login
        });
    }

    
}
export default new registerActions;