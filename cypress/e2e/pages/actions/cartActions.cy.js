import cartPageLocatorsCy from "../locators/cartPageLocators.cy";
import homeActionsCy from "./homeActions.cy";

class cartActions{
    add={
        addCartProduct(productName,functiosSelect){
            functiosSelect;
            cy.get(cartPageLocatorsCy.locator.productName).contains(productName);
            cy.get(cartPageLocatorsCy.locator.submitAddCar).click();
            cy.get(cartPageLocatorsCy.locator.cartLink).click();
        }
        ,
        Samsung_ga_s6(){
            this.addCartProduct("Samsung galaxy s6",homeActionsCy.selectSamsung_Ga_S6());
        },
        Samsung_ga_s7() {
            this.addCartProduct("Samsung galaxy s7", homeActionsCy.selectSamsung_Ga_S7());
        },
    
        addCartNokia_Lu_1520() {
            this.addCartProduct("Nokia lumia 1520", homeActionsCy.selectNokia_Lu_1520());
        },
    
        Nexus_6() {
            this.addCartProduct("Nexus 6", homeActionsCy.selectNexus_6());
        },
    
        Iphone_6() {
            this.addCartProduct("Iphone 6 32gb", homeActionsCy.selectIphone_6());
        },
    
        Htc_one_m9() {
            this.addCartProduct("HTC One M9", homeActionsCy.selectHtc_one_m9());
        },
    
        Sony_vaio_i5() {
            this.addCartProduct("Sony vaio i5", homeActionsCy.selectSony_vaio_i5());
        },
    
        Sony_vaio_i7() {
            this.addCartProduct("Sony vaio i7", homeActionsCy.selectSony_vaio_i7());
        },
    
        Macbook_air() {
            this.addCartProduct("MacBook air", homeActionsCy.selectMacbook_air());
        },
    
        Dell_i7() {
            this.addCartProduct("Dell i7 8gb", homeActionsCy.selectDell_i7());
        },
    
        Dell_inch_2017() {
            this.addCartProduct("2017 Dell 15.6 Inch", homeActionsCy.selectDell_inch_2017());
        },
    
        Macbook_pro() {
            this.addCartProduct("MacBook Pro", homeActionsCy.selectMacbook_pro());
        },
    
        Apple_monitor_24() {
            this.addCartProduct("Apple monitor 24", homeActionsCy.selectApple_monitor_24());
        },
    
        Asus_full_hd() {
            this.addCartProduct("ASUS Full HD", homeActionsCy.selectAsus_full_hd());
        },
        
        addMoreProduct(){
            cy.get(cartPageLocatorsCy.locator.homeLink).click();
        },
    }
    delete={
        deleteProduct(){
            cy.get(cartPageLocatorsCy.locator.cartLink).click();
        }
    }
}
export default new cartActions;