describe('User App', () => {
    beforeEach(() => {
      // before each test
      cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const boxInput = () => cy.get('input[name=terms]')

    it('test to make sure it works', () =>{
        expect(1+2).to.equal(3)
    })

    it('Name input types and confirms what is typed', () =>{
      nameInput()
      .should('have.value', '')
      .type('StevenIsCool')
      .should('have.value', 'StevenIsCool')
    })

    it('email and password inputs types', () =>{
      emailInput()
      .should('have.value', '')
      .type('steve@steve.com')
      passwordInput()
      .should('have.value', '')
      .type('password')
    })

    it('checks the box', () => {
      boxInput()
      .click()
    })

    it('submits', () =>{
      nameInput()
      .should('have.value', '')
      .type('DirtyDan')
      emailInput()
      .should('have.value', '')
      .type('Dirty@dan.com')
      passwordInput()
      .should('have.value', '')
      .type('DirtyDan')
      boxInput()
      .click()
      cy.get('button')
      .click()
    })

    it('clears everthing', () =>{
      nameInput()
      .should('have.value', '')
      emailInput()
      .should('have.value', '')
      passwordInput()
      .should('have.value', '')
    })

    


})