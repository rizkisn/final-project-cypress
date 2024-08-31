const locators = require('../signup-page/signupPage-locator');
const staticVars = require('../static-variables')

class signupPage {

    clickSignUpMenu() {
        cy.xpath(locators.datatestid.menusignup).click();
    }

    verifySignUpModalAppears() {
        cy.xpath(locators.datatestid.formsignup , { timeout: 1000 }).should('be.visible');
    }

    fillUsername(username) {
        cy.wait(5000);
        cy.xpath(locators.datatestid.username, { timeout: 1000 }).should('be.visible');
        cy.xpath(locators.datatestid.username, { timeout: 5000}).type(username);
    }

    fillPassword(password) {
        
        cy.xpath(locators.datatestid.password).type(password);
    }

    clickSignUpButton() {
        cy.xpath(locators.datatestid.button('Sign up')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }

    verifySignUpSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }

    signUp(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickSignUpButton()
    }
}

module.exports = new signupPage();
