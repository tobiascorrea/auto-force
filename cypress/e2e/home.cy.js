/// <reference types="cypress" />

import homePage from '../support/pages/home/homePage';

describe('Página principal | Home', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.suppressXHRLogging();
    });
    
    context('Acessa a home page com sucesso', () => {
        
        it('Deve acessar a home page com sucesso', () => {
            homePage.homePageIsVisible()
            homePage.verifyFooter()
            homePage.buttonLearnMore()
        });

    });

});