class homePageLocators {
  locator = {
    categoryPhone:()=> cy.get("[onclick=\"byCat('phone')\"]"),
    categoryMonitor:()=> cy.get("[onclick= \"byCat('monitor')\"]"),
    categoryLaptops:()=> cy.get("[onclick= \"byCat('notebook')\"]"),
    SubmitCategory:()=> cy.get('[onclick= byCat("phone")]'),
    
    productList:()=> cy.get('#tbodyid .card'),
    productLink:()=> cy.get('.card-title a'),
    productBody:()=> cy.get("#tbodyid"),
    
    // Lista de Categoria Phone
    samsung_S6:()=> cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
    Nokia_lumia_1520:()=> cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch'),
    Nexus_6:()=> cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch'),
    samsun_s7:()=> cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch'),
    Iphone_6_32gb:()=> cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch'),
    Sony_xperia_z5:()=> cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch'),
    HTC_One_M9:()=> cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch'),
    //Lista de Categoria Laptops
    Sony_vaio_i5:()=> cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
    Sony_vaio_i7:()=> cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch'),
    MacBook_air:()=> cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch'),
    Dell_i7_8gb:()=> cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch'),
    Dell_15_6_Inch:()=> cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch'),
    MacBook_Pro:()=> cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch'),
    //Lista de Categoria Monitor
    Apple_monitor_24:()=> cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
    ASUS_Full_HD:()=> cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch'),
    
  };
}

export default new homePageLocators();
