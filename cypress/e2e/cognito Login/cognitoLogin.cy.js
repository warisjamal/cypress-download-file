/// <reference types="Cypress"/>

describe('congnito login test',()=>{

    it('Testing Starts',()=>{
        cy.visit('https://kna.qa.learnwithatom.com/');
        // cy.wait(10000);
        cy.get('.visible-lg #signInFormUsername').type('ktp.author');
        cy.get('.visible-lg #signInFormPassword').type('Kaplan123@');
        cy.get('.visible-lg .submitButton-customizable').click();
    })

})