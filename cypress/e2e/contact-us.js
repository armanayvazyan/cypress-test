/// <reference types="cypress" />

describe("Contact Us Tests", ()=> {

    beforeEach(() => {
        cy.visit("http://www.saucedemo.com");
       })

    it("Check Submit Functionality when all data is input", ()=> {
        //act
        cy.get("[name='first_name']").type("Arman");
        cy.get("[name='last_name']").type("Ayvazyan");
        cy.get("[name='email']").type("arman@ayvazyan.com");
        cy.get("[name='message']").type("Lorem Ipsum is simply");

        cy.log("log for new commit")
        cy.get("[type='submit']").click()

        //assert
        cy.get("h1").should("have.text", "Thank You for your Message!")
    });

    it("Check Submit Invalid Functionality when description is not set", ()=> {
        //act
        cy.get("[name='first_name']").type("Arman");
        cy.get("[name='last_name']").type("Ayvazyan");
        cy.get("[name='email']").type("arman@ayvazyan.com");
    
        cy.get("[type='submit']").click()

        //assert
        cy.get('body').should("contain.text", "Error: all fields are required")
    });

    it("Check Submit Invalid Functionality when email set invalid", ()=> {
        //act
        cy.get("[name='first_name']").type("Arman");
        cy.get("[name='last_name']").type("Ayvazyan");
        cy.get("[name='email']").type("arman");
    
        cy.get("[name='message']").type("Lorem Ipsum is simply");
        cy.get("[type='submit']").click()

        //assert
        cy.get('body').should("contain.text", "Error: Invalid email address")
    });

    it("Check Reset Functionality", ()=> {
        //act
        cy.get("[name='first_name']").type("Arman");
        cy.get("[name='last_name']").type("Ayvazyan");
        cy.get("[name='email']").type("arman");
        cy.get("[name='message']").type("Lorem Ipsum is simply");
        
        
        cy.get("[type='reset']").click()

        //assert
        cy.get("[name='last_name']").should("have.text", "")
        cy.get("[name='email']").should("have.text", "")
        cy.get("[name='message']").should("have.text", "")
    });

})