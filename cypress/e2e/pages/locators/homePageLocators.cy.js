class homePageLocators {
  locator = {
    categoryPhone: "[onclick=\"byCat('phone')\"]",
    categoryMonitor: "[onclick= \"byCat('monitor')\"]",
    categoryLaptops: "[onclick= \"byCat('notebook')\"]",
    SubmitCategory: '[onclick= byCat("phone")]',

    productList: '#tbodyid .card',
    productLink: '.card-title a',
    productBody: "#tbodyid",
  };
}

export default new homePageLocators();
