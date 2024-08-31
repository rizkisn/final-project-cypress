const homePage = require('../support/pages/home-page/homePage');
const checkoutPage = require('../support/pages/checkout-page/checkoutPage');
const data = require('../support/pages/static-data');
const base = require('../support/pages/base');
const rand = require('../support/pages/randomize');
const loginPage = require('../support/pages/login-page/loginPage');

describe("checkout", () => {
    var customer_name = rand.name()
    var customer_country = data.placeorder.placeorder_country
    var customer_city = data.placeorder.placeorder_city
    var customer_card = rand.card_number()
    var order_month = data.placeorder.placeorder_month
    var order_year = data.placeorder.placeorder_year
    beforeEach(() => {
        base.openurl()
        homePage.verifyHomePageAppears()
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.registered_username, data.user_data.registered_password)
        loginPage.verifynameofUser()
        loginPage.verifyLogout()

        checkoutPage.addcartphones()
        checkoutPage.addcartlaptops()
        checkoutPage.addcartmonitors()
        checkoutPage.clickmenuCart()
    })

    it("with valid data", () => {
        checkoutPage.inputOrder(customer_name, customer_country, customer_city, customer_card, order_month, order_year)
        checkoutPage.verifyalertsuccessPurchase()
        
     })
    it("with empty data", () => {
        checkoutPage.inputOrder('', '', '', '', '', '')
        checkoutPage.alertemty()
        
    })
})