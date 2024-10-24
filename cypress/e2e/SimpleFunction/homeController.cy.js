import LocatorModelCy from "./LocatorModel.cy";

class HomeController{
    openModal(btnModal,modalContent){
        btnModal.click();
        modalContent.should('exist').and('be.visible');
    }

    Login(user,pass){
        this.openModal(LocatorModelCy.locatorLogin.btnModalLogin(),LocatorModelCy.locatorLogin.contentModalLogin());
        LocatorModelCy.locatorLogin.inputUserLogin().wait(1000).type(user).should('be.visible')
        LocatorModelCy.locatorLogin.inputPasswordLogin().wait(1000).type(pass).should('be.visible')
        LocatorModelCy.locatorLogin.btnLogin().click();
    }
    Signin(user,pass){
        this.openModal(LocatorModelCy.locatorSignin.btnModalSign_in(),LocatorModelCy.locatorSignin.contentModalSign_in());
        LocatorModelCy.locatorSignin.inputUserSign_in().wait(1000).type(user).should('be.visible')
        LocatorModelCy.locatorSignin.inputPasswordSign_in().wait(1000).type(pass).should('be.visible')
        LocatorModelCy.locatorSignin.btnSign_in().click();
    }
    
    NavegarCategoria(nom_cat){
        LocatorModelCy.locatorCategory.SubmitCategory(nom_cat).click();
        LocatorModelCy.locatorCategory.linkProduct().earch(($el,index)=>{
            const productHref = $el.attr("href");
            expect(productHref).to.not.be.empty; // verifica que no esté vacio la constante
            cy.log(`Producto ${index + 1}: ${productHref}`);
            cy.visit(`https://www.demoblaze.com/${productHref}`);
            cy.wait(1000);
            cy.get(".name").wait(1000).should("exist").and("be.visible");
            cy.go("back");
        })
        
    }

    
}   
export default new HomeController;