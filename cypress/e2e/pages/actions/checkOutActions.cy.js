import checkOutLocatorsCy from "../locators/checkOutLocators.cy";

class checkOutActions{
    constructor(){
        this.checkoutData=[];
    }
    loadCheckOutData(){
        cy.fixture("checkout").then((data) => {
            this.checkoutData=data;
        });
    }
    openCheckOut(){
        cy.get(checkOutLocatorsCy.locators.openCheckOut).contains('Place Order').click();
    }
    createCheckOut(name,country,city,card,month,year){
        this.openCheckOut();
        cy.get(checkOutLocatorsCy.locators.inputName).type(name);
        cy.get(checkOutLocatorsCy.locators.inputCountry).type(country);
        cy.get(checkOutLocatorsCy.locators.inputCity).type(city);
        cy.get(checkOutLocatorsCy.locators.inputCard).type(card);
        cy.get(checkOutLocatorsCy.locators.inputMonth).type(month);
        cy.get(checkOutLocatorsCy.locators.inputYear).type(year);
        cy.get(checkOutLocatorsCy.locators.btnRegistrarCheckOut).click();
    }
    loadMultipleCheckout(){
        this.checkoutData.forEach(element => {
            this.createCheckOut(element.name,element.country,element.city,element.card,element.month,element.year);
        });
    }
}
export default new checkOutActions