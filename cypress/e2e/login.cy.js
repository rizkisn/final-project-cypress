const homePage = require('../support/pages/home-page/homePage');
const loginPage = require('../support/pages/login-page/loginPage');
const data = require('../support/pages/static-data');
const base = require('../support/pages/base')

describe("Login", () => {
    beforeEach(() => {
        base.openurl()
        homePage.verifyHomePageAppears()
        
    })

    it("with unregistered data", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.noregistered_username, data.user_data.noregistered_password)
        loginPage.verifyUsernotExistsErrorMessageAppears()
    })

    it("with empty data", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn('', '')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.registered_username, data.user_data.registered_password)
        loginPage.verifynameofUser()
        loginPage.verifyLogout()
    })
})
