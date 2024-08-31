const locators = require('../checkout-page/checkout-page-locators');
const { faker }  = require('@faker-js/faker');
const homePage = require('../home-page/homePage');
const staticVars = require('../static-variables')

class checkoutpage {
    verifyHomePageAppears() {
        cy.xpath(locators.logintest.imageCompanyLogo).should('be.visible');
    }

    clickProduck() {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    }
    addtocard(){
        cy.get('.col-sm-12 > .btn').click()

    }

    alertadded(){
        cy.on('window:alert', (text) => {
            expect(text).to.contains(staticVars.success_message.addtocart);
          });
    }
    alertemty(){
        cy.on('window:alert', (text) => {
            expect(text).to.contains(staticVars.error_message.empty_namecard);
          });
    }
    clickmenuCart(){
        cy.get('#cartur').click()
    }
    clickbuttonPlaceorder(){
        cy.get('.col-lg-1 > .btn').click()
    }
    clickpurchasebutton(){
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }
    verifyalertsuccessPurchase(){
        cy.get('.sweet-alert').should('exist');
        cy.wait(3000);
        cy.get('.confirm').click()
        }  

    addcartphones(){
        cy.get('.active > .nav-link').click();
        cy.get(`[onclick="byCat('phone')"]`).click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.wait(5000);
        cy.get('.col-sm-12 > .btn').click()
    }
    addcartlaptops(){
        cy.get('.active > .nav-link').click();
        cy.get(`[onclick="byCat('notebook')"]`).click();
        cy.wait(5000);
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.wait(5000);
        cy.get('.col-sm-12 > .btn').click()

    }
    addcartmonitors(){
        cy.get('.active > .nav-link').click();
        cy.get(`[onclick="byCat('monitor')"]`).click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.wait(5000);
        cy.get('.col-sm-12 > .btn').click()


    }
    verifyplaceOrder(){
        //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
        cy.xpath(locators.checkouttest.placeform).should('be.visible');
        cy.xpath(locators.checkouttest.total).should('be.visible');
        cy.xpath(locators.checkouttest.name).should('be.visible');
        cy.xpath(locators.checkouttest.country).should('be.visible');
        cy.xpath(locators.checkouttest.city).should('be.visible');
        cy.xpath(locators.checkouttest.city).should('be.visible');
        cy.xpath(locators.checkouttest.month).should('be.visible');
        cy.xpath(locators.checkouttest.year).should('be.visible');
        
        cy.wait(2000);
        
        //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible');
        //cy.xpath(locators.checkouttest.button('Purchase')).should('be.visible');
        //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').should('be.visible');
    }
    inputNamaCustomer(customer_name) {
        cy.xpath(locators.checkouttest.name).type(customer_name)
    }
    inputCountry(customer_country) {
        cy.xpath(locators.checkouttest.country).type(customer_country)
    }
    inputCity(customer_city) {
        cy.xpath(locators.checkouttest.city).type(customer_city)
    }
    async inputCard(customer_card) {
        cy.xpath(locators.checkouttest.card).type(customer_card)
    }
    async inputMonth(order_month) {
        cy.xpath(locators.checkouttest.month).type(order_month)
    }
    async inputYear(order_year) {
        cy.xpath(locators.checkouttest.year).type(order_year)
    }
    async inputOrder(customer_name, customer_country, customer_city, customer_card, order_month, order_year) {
        this.clickbuttonPlaceorder()
        this.verifyplaceOrder()
        if(customer_name != '' && customer_card != '') {
            this.inputNamaCustomer(customer_name)
            this.inputCountry(customer_country)
            this.inputCity(customer_city)
            this.inputCard(customer_card)
            this.inputMonth(order_month)
            this.inputYear(order_year)
        }
        this.clickpurchasebutton()
        //this.verifyalertsuccessPurchase()
    }

     
}

module.exports = new checkoutpage();
