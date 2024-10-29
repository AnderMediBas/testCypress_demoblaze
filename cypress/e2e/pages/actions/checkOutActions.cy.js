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
        checkOutLocatorsCy.locators.openCheckOut().contains('Place Order').click();
    }
    createCheckOut(name,country,city,card,month,year){
        this.openCheckOut();
        checkOutLocatorsCy.locators.inputName().type(name);
        checkOutLocatorsCy.locators.inputCountry().type(country);
        checkOutLocatorsCy.locators.inputCity().type(city);
        checkOutLocatorsCy.locators.inputCard().type(card);
        checkOutLocatorsCy.locators.inputMonth().type(month);
        checkOutLocatorsCy.locators.inputYear().type(year);
        checkOutLocatorsCy.locators.btnRegistrarCheckOut().click();
    }
    loadMultipleCheckout(){
        this.checkoutData.forEach(element => {
            this.createCheckOut(element.name,element.country,element.city,element.card,element.month,element.year);
        });
    }
}
export default new checkOutActions