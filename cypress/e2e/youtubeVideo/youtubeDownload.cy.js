/// <reference types="Cypress" />
/// <reference types="cypress-downloadfile"/>

describe('Youtube video',function(){
    
    it('Download youutbe video',function(){
        cy.visit('https://www.youtube.com/');
        cy.fixture('songs').each((songNames)=>{
            cy.log(songNames.Song_Name);
            cy.get('#search-input > #search').type(songNames.Song_Name,{force: true});
            cy.get('#search-icon-legacy').click();
            cy.get('#dismissible .ytd-video-renderer').first().click();
            
            cy.url().then(($link)=>{
                cy.origin('https://getn.topsandtees.space',{ args: { $link } }, ({ $link })=>{
                    cy.visit('/dw4YQQnEr5');
                    cy.get('.form-group input[name="q"]').type($link);
                    cy.get('.form-group .btn').click();
                });
                cy.get('#dl_format').select('MP3 320 kbps').should('have.value','mp3');
                cy.get('.search-item__download').click();
                cy.get('.search-item__download').invoke('attr','data-href').then((videoLink)=>{
                cy.downloadFile(videoLink,'mp3downloads',songNames.Song_Name+".mp3");
                })
            })
        })
    });
})