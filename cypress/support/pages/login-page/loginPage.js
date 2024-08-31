const locators = require('../login-page/login-page-locator');
const { faker }  = require('@faker-js/faker');
const homePage = require('../home-page/homePage');
const staticVars = require('../static-variables')

class loginPage {
   

    clickLogInMenu() {
        cy.xpath(locators.logintest.login).click();
    }

    verifyLogInModalAppears() {
        cy.xpath('//*[@id="logInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsernameLogIn(username) {
        cy.xpath(locators.logintest.username, { timeout: 1000 }).should('be.visible');
        cy.wait(5000);
        cy.xpath(locators.logintest.username, { timeout: 5000}).type(username);
    }

    fillPasswordLogIn(password) {
        cy.xpath(locators.logintest.password).type(password);
    }

    clickLogInButton() {
        cy.xpath(locators.logintest.button('Log in')).click();
        cy.wait(5000);
    }

    verifynameofUser() {
        //cy.get('#nameofuser').should('have.value', 'Welcome rizkisn')
        cy.get('#nameofuser').should('exist')
    }
    verifyLogout() {
        cy.xpath(locators.logintest.logout).should('exist')
    }
    verifyAlertAppears(errorMessage) {
         cy.on('window:alert',(t)=>{
             expect(t).to.contains(errorMessage);
          })
     }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUsernotExistsErrorMessageAppears() {
         this.verifyAlertAppears(staticVars.error_message_login.nouser_registered)
     }


    logIn(username, password) {
        if (username != '') {
            this.fillUsernameLogIn(username);
            this.fillPasswordLogIn(password);
        }
        this.clickLogInButton()
    }
}

module.exports = new loginPage();
