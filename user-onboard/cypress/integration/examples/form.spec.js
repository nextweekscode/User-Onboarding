describe('Form tests', () =>{
    describe('input tests', () =>{
        it('can navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include', 'localhost')
        })

        it('can type in name field and check that input contains name, then delete some of name for validation and replace letters to complete form', () => {
            cy.get('input[name="first_name"]')
            .type('Dean')
            .type('{backspace}')
            .type('{backspace}')
            .type('an')
            .should('have.value', 'Dean')
        })

        

        it('can type email address', () => {
            cy.get('input[name="email"]')
            .type('dean@dean.com')
        })

        it('can type password', () => {
            cy.get('input[name="password"]')
            .type('password123')

        })

        it('can check checkbox', () => {
            cy.get('input[name="yes"').check()
            .should('be.checked')
        })

        it('can select from the drop down', () => {
            cy.get('select[name="position"]').select('manager')
            .should('have.value', 'manager')
        })

        it('can submit form', () => {
            cy.get('#cancelBtn').click()
        })




    })
})