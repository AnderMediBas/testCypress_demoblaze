import checkOutActionsCy from "../pages/actions/checkOutActions.cy";

describe('TESTER CHECKOUT', () => {
    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.demoblaze.com/cart.html');
        checkOutActionsCy.loadCheckOutData();
    });
    it('Debe de llenar el checkout con el fixture', () => {
        checkOutActionsCy.loadMultipleCheckout();
    });
});