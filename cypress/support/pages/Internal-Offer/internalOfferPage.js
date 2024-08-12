/// <reference types="cypress" />

const elem = require('./elementsInternalOffer').ELEMENTS

class InternalOfferPage {
    verifyEscolhaVersao() {
        cy.get(elem.escolha_versao).should('be.visible')
    }

    verifyTitleFormConversion() {
        cy.get(elem.title_form_conversion).should('contain', 'Form Conversion Title')
    }

    clickSelectableItem() {
        cy.get(elem.selectable_item).click({ force: true, multiple: true })
    }

    typeInNameInput() {
        cy.get(elem.input_name).first().type('teste')
    }

    typeInEmailInput() {
        cy.get(elem.input_email).first().type('teste@teste.com.br')
    }

    typeInCpfInput() {
        cy.get(elem.input_cpf).first().type('34456651898')
    }

    typeInPhonenput() {
        cy.get(elem.input_phone).first().type('11999999999')
    }

    selectUnidade() {
        
        cy.get(elem.dropdown)
          .should('be.visible')
          .click({ force: true })
        
        cy.get(elem.dropdown_option)
          .contains('AutoDealer Natal')
          .click({ force: true })
    }

    selectRadioNao() {
        cy.get(elem.radio_nao).click()
    }

    checkReceberContatoPor() {
        cy.get(elem.receber_contato_por).check()
    }

    buttonSubmitFormConversion() {
        cy.get(elem.button_submit).click()
    }
    messageSucessFormConversion() {
        cy.get(elem.menssage_success).should('be.visible').then(($el) => {
            const text = $el.text();
            expect(text).to.include('Solicitação realizada com sucesso!');
            expect(text).to.include('Em alguns instantes um de nossos consultores entrará em contato com você.');
        });
    }
}

export default new InternalOfferPage()
