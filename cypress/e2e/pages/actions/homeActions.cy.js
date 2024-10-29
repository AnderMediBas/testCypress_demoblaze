import homePageLocatorsCy from "../locators/homePageLocators.cy";

class homeActions {
  //Metodos para seleccionar las categorias
  selectCategoriaphone() {
    homePageLocatorsCy.locator.categoryPhone().click();
    cy.wait(1000);
  }
  selectCategoriaLaptop() {
    homePageLocatorsCy.locator.categoryLaptops().click();
    cy.wait(1000);
  }
  selectCategoriaMonitor() {
    homePageLocatorsCy.locator.categoryMonitor().click();
    cy.wait(1000);
  }

  //Metodo para seleccionar los productos en sus Respectivas categorias
  selectSamsung_Ga_S6() {
    this.selectCategoriaphone(); // llamando el metodo de seleccion de categoria
    homePageLocatorsCy.locator.samsung_S6().click();
  }
  selectNokia_Lu_1520() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.Nokia_lumia_1520().click();
  }
  selectNexus_6() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.Nexus_6().click();
  }
  selectSamsung_Ga_S7() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.samsun_s7().click();
  }
  selectIphone_6() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.Iphone_6_32gb().click();
  }
  selectSony_xpeia_z5() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.Sony_xperia_z5().click();
  }
  selectHtc_one_m9() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.HTC_One_M9().click();
  }
  selectSony_vaio_i5() {
    this.selectCategoriaphone();
    homePageLocatorsCy.locator.Sony_vaio_i5().click();
  }
  selectSony_vaio_i7() {
    this.selectCategoriaLaptop();
    homePageLocatorsCy.locator.Sony_vaio_i7().click();
  }
  selectMacbook_air() {
    this.selectCategoriaLaptop();
    homePageLocatorsCy.locator.MacBook_air().click();
  }
  selectDell_i7() {
    this.selectCategoriaLaptop();
    homePageLocatorsCy.locator.Dell_i7_8gb().click();
  }
  selectDell_inch_2017() {
    this.selectCategoriaLaptop();
    homePageLocatorsCy.locator.Dell_15_6_Inch().click();
  }
  selectMacbook_pro() {
    this.selectCategoriaLaptop();
    homePageLocatorsCy.locator.MacBook_Pro().click();
  }
  selectApple_monitor_24() {
    this.selectCategoriaMonitor();
    homePageLocatorsCy.locator.Apple_monitor_24().click();
  }

  //Metodo para seleccionar otro producto si se lo requiera
  selectAsus_full_hd() {
    this.selectCategoriaMonitor();
    homePageLocatorsCy.locator.ASUS_Full_HD().click();
  }
}

export default new homeActions();
