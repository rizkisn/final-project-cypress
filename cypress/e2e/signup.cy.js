const signupPage = require('../support/pages/signup-page/signupPage');
const base = require('../support/pages/base');
const homePage = require('../support/pages/home-page/homePage')
const random = require('../support/pages/randomize')

describe("Signup", () => {
    beforeEach(() => {
        base.openurl()
        homePage.verifyHomePageAppears()
        signupPage.clickSignUpMenu()
        signupPage.verifySignUpModalAppears()
    })

    it("with unregistered data", () => {
        signupPage.signUp('', '456rsn')
        signupPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        signupPage.signUp('', '')
        signupPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        signupPage.signUp(random.email(), random.password())
        signupPage.verifySignUpSuccessMessageAppears()
    })
    
})
