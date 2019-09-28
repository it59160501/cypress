describe('cypress Getting Started', () =>{
    it('Does',()=>{
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@gmail.com')
            .should('have.value','fake@gmail.com')

            cy.get('.action-div').dblclick().should('not.be.visible')
            cy.get('.action-input-hidden').should('be.visible')


        cy.get('.action-input-hidden')
            .should('have.value','Double click to edit')
    })
})