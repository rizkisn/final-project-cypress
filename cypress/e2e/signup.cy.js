const homePage = require('../support/pages/home-page/homePage')

describe("Signup", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("with invalid data ver", () => {
        
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.fillUsername()
        homePage.fillPassword('jojo123')
        homePage.clickSignUpButton()
        homePage.verifyAlertAppears()
        
    })
})
