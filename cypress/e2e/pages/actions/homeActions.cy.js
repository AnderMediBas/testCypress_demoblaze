import homePageLocatorsCy from "../locators/homePageLocators.cy";


class homeActions {
  selectCategoriaphone() {
    cy.get(homePageLocatorsCy.locator.categoryPhone).click();
    cy.wait(1000);
  }
  selectCategoriaLaptop() {
    cy.get(homePageLocatorsCy.locator.categoryLaptops).click();
    cy.wait(1000);
  }
  selectCategoriaMonitor() {
    cy.get(homePageLocatorsCy.locator.categoryMonitor).click();
    cy.wait(1000);
  }

  selectSamsung_Ga_S6() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Samsung galaxy s6").should('be.visible').click();
  }
  selectNokia_Lu_1520() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Nokia lumia 1520").should('be.visible').click();
  }
  selectNexus_6() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Nexus 6").should('be.visible').click();
  }
  selectSamsung_Ga_S7() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Samsung galaxy s7").should('be.visible').click();
  }
  selectIphone_6() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Iphone 6 32gb").should('be.visible').click();
  }
  selectSony_xpeia_z5() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Sony xperia z5").should('be.visible').click();
  }
  selectHtc_one_m9() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("HTC One M9").should('be.visible').click();
  }
  selectSony_vaio_i5() {
      this.selectCategoriaphone();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Sony vaio i5").should('be.visible').click();
  }
  selectSony_vaio_i7() {
      this.selectCategoriaLaptop();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Sony vaio i7").should('be.visible').click();
  }
  selectMacbook_air() {
      this.selectCategoriaLaptop();
      cy.get(homePageLocatorsCy.locator.productLink).contains("MacBook air").should('be.visible').click();
  }
  selectDell_i7() {
      this.selectCategoriaLaptop();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Dell i7 8gb").should('be.visible').click();
  }
  selectDell_inch_2017() {
      this.selectCategoriaLaptop();
      cy.get(homePageLocatorsCy.locator.productLink).contains("2017 Dell 15.6 Inch").should('be.visible').click();
  }
  selectMacbook_pro() {
      this.selectCategoriaLaptop();
      cy.get(homePageLocatorsCy.locator.productLink).contains("MacBook Pro").should('be.visible').click();
  }
  selectApple_monitor_24() {
      this.selectCategoriaMonitor();
      cy.get(homePageLocatorsCy.locator.productLink).contains("Apple monitor 24").should('be.visible').click();
  }
  selectAsus_full_hd() {
      this.selectCategoriaMonitor();
      cy.get(homePageLocatorsCy.locator.productLink).contains("ASUS Full HD").should('be.visible').click();
  }
  
}

export default new homeActions();
