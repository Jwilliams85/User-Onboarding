//describe, it, context, specify, beforeEach, describe is the same as context or describe === context, it === specify

describe("Test our form inputs", function () {
    beforeEach(function() {
        cy.visit("http://localhost:3000")
    })
    it("adds text to inputs", function () {
       //this is testing if the page loads.  
       cy.get('[data-cy="name"]').type("Janneth").should("have.value", "Janneth")
       cy.get('[data-cy="email"]').type("email@email.com").should("have.value", "email@email.com")
       cy.get('[data-cy="password"]').type("mypassword").should("have.value", "mypassword")
       cy.get('[type="checkbox"]').check().should("be.checked")
       cy.get('form').submit();
    })
})

it("second it test", function(){
    //test here
})
