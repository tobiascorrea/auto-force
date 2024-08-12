/// <reference types="cypress" />

const elem = require('./elementsHomePage').ELEMENTS

class HomePage {
    homePageIsVisible() {
        cy.get(elem.home_visible).should('be.visible')
    }

    buttonLearnMore() {
        cy.get(elem.saiba_mais_button).contains('Saiba Mais').click()
    }

    verifyFooter() {
        cy.get(elem.footer).should('be.visible')
    }
}

export default new HomePage()