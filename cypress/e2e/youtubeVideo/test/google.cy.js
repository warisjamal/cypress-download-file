/// <reference types="Cypress"/>

describe("Google type something",function(){
    it("Hello",function(){
        cy.visit("https://www.google.co.in/");
        cy.get('.gLFyf').type('Hello world{enter}');
    })
})