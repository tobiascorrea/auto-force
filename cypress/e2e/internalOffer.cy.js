/// <reference types="cypress" />

import internalOffer from '../support/pages/Internal-Offer/internalOfferPage';
import homePage from '../support/pages/home/homePage';

describe('Página Internal | Offer', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.suppressXHRLogging();
    });
    
    context('Acessa a pagina Internal Offer e preenche o formulario de conversão de Leads com sucesso', () => {
        
        it('Deve acessar a home, clicar no card de oferta, ser redirecionado para a pagina internal offer e preencher o formulario de conversão de leads', () => {
            homePage.homePageIsVisible()
            homePage.buttonLearnMore()
            internalOffer.verifyEscolhaVersao()
            internalOffer.clickSelectableItem()
            internalOffer.typeInNameInput()
            internalOffer.typeInEmailInput()
            internalOffer.typeInCpfInput()
            internalOffer.typeInPhonenput()
            internalOffer.selectUnidade()
            internalOffer.selectRadioNao()
            internalOffer.checkReceberContatoPor()
            internalOffer.buttonSubmitFormConversion()
            internalOffer.messageSucessFormConversion()
           
        });

    });

});