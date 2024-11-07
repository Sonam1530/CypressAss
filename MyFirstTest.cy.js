///<reference types="Cypress" |>
///<reference types="Cypress" |>

describe('Incubyte Assessment', () => {
    it('Cypress Automation', () => {
      expect(true).to.equal(true)

      cy.visit ("https://magento.softwaretestingboard.com/") 
      cy.get('.panel > .header > .authorization-link > a').click()
      
      //Creating New Account
      cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click()
      cy.wait (2000)
      cy.get('#firstname').type('Sonam')
      cy.wait (500)
      cy.get('#lastname').type('Savarkar')
      cy.wait (500)
      cy.get('#email_address').type('ssvrkr1530@gmail.com')
      cy.wait (500)
      cy.get('#password').type('ssvrkr@1122')
      cy.wait (500)
      cy.get('#password-confirmation').type('ssvrkr@1122')
      cy.wait (500)
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click({force:true})
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({force:true})
      cy.wait (4000)

      //Signing in
      cy.get('.panel > .header > .authorization-link > a').click({force:true})
      cy.wait (4000)
      cy.get('#email').type('ssvrkr1530@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('ssvrkr@1122')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click({force:true})
      cy.wait (4000)
      cy.get('#ui-id-4 > :nth-child(2)').click()
      cy.get('dd > .items > :nth-child(1) > a').click()
      cy.get(':nth-child(2) > .product-item-info > .details > .name > .product-item-link').click()
      cy.get('#option-label-size-143-item-169').click()
      cy.wait (3000)
      cy.get('#option-label-color-93-item-57').click()
      cy.wait (5000)
      cy.get('#product-addtocart-button > span').click()

      //Logged out
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({force:true})
      cy.wait (5000)


    })
  })