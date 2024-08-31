const locators = require('../home-page/home-page-locators');

class homePage {
  
    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
        cy.xpath(locators.datatestid.categori).should('exist');
        cy.xpath(locators.datatestid.narvbark).should('be.visible'),
        cy.xpath(locators.datatestid.bodyproduk).should('be.visible'),
        cy.xpath(locators.datatestid.footbar).should('be.visible')
    }

}

module.exports = new homePage();
