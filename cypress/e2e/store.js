/// <reference types="cypress" />

describe("Contact Us Tests", ()=> {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
       })

    it("on addint item to cart number gets ++", ()=> {
        
        cy.get("[class*='topcart'] span[class*='label']").then(
            ($num1) => {
                const totalCountBefore = parseInt($num1.text());
                cy.get("section[id='featured'] div[class*='thumbnails'] > div")
                    .first()
                    .within(() => {
                        cy.get("[class='productcart']").click()
                    })
                cy.get("[class*='topcart'] span[class*='label']").should("have.text", totalCountBefore + 1)                 
    })
})
})