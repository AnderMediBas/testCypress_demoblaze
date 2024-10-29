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
        registerPageLocatorsCy.locator.btnModalSign_in().click();
        registerPageLocatorsCy.locator.signUsername().type(username);
        registerPageLocatorsCy.locator.signPassword().type(password);
        registerPageLocatorsCy.locator.submitSignButton().click();
    }
    siginMultipleUsers() {
        this.userData.forEach((user) => {
            this.signUser(user.username, user.userpassword);
            cy.reload(); // Recargar para hacer el siguiente registro 
        });
    }

    
}
export default new registerActions;