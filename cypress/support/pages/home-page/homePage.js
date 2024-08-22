const locators = require('../home-page/home-page-locators');
const { faker } = require('@faker-js/faker');

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    clickSignUpMenu() {
        cy.xpath('//*[@id="signin2"]').click();
    }

    verifySignUpModalAppears() {
        cy.xpath('//*[@id="signInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsername() {
        var randomName = faker.person.firstName
        cy.wait(5000);
        cy.xpath('//*[@id="sign-username"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="sign-username"]', { timeout: 5000}).type([`faker.person.firstName`], '-test');
    }

    fillPassword(password) {
        cy.xpath('//*[@id="sign-password"]').type(password);
    }

    clickSignUpButton() {
        cy.xpath(locators.datatestid.button('Sign up')).click();
    }

    verifyAlertAppears() {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This user already exist.');
         })
    }
}

module.exports = new homePage();
