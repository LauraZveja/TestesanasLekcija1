import TextBoxPage from "../../pageObjects/textBoxPage.page";

describe("Elements", () => {
    context("Text Box scenarios", () => {
      beforeEach(() => {
        TextBoxPage.visit();
        //cy.visit("/text-box");
      });
  
      it("Text Box Positive", () => {
        // TODO: Implement scenario
        // Interactions with elements
        TextBoxPage.usernameField.type("Donald Trump");
        TextBoxPage.emailField.type("random@email.com");
        TextBoxPage.currentAddressField.type("Random Current Address");
        TextBoxPage.permanentAddressField.type("Random Permanent Address");
        TextBoxPage.submitButton.click();
      //cy.get("#userName").type("Donald Trump");
      //cy.get("#userEmail").type("random@email.com");
      //cy.get("textarea#currentAddress").type("Random Current Address");
      //cy.get("textarea#permanentAddress").type("Random Permanent Address");
      //cy.get("button#submit").click();

         //validation
         TextBoxPage.nameSection.should("have.text", "Name:Donald Trump");
         TextBoxPage.emailSection.should("have.text", "Email:random@email.com");
         TextBoxPage.currentAddressSection.should(
                 "contain.text",
                 "Current Address :Random Current Address"
               );
               TextBoxPage.permanentAddressSection.should(
                "contain.text",
                "Permananet Address :Random Permanent Address"
              );

          //cy.get("#name").should("have.text", "Name:Donald Trump");
          //cy.get("#email").should("have.text", "Emai:random@random.com");
          //cy.get("p#currentAddress").should(
           // "contain.text",
           // "Current Address :Random Current Address"
         // );
          //cy.get("p#permanentAddress").should(
           // "contain.text",
           // "Permananet Address :Random Permanent Address"
          //);

      });

      it("Text Box Negative", () => {
        TextBoxPage.emailField.should("not.have.class", "field-error");
        TextBoxPage.emailField.type("random@email@asdsada.com");
        TextBoxPage.submitButton.click();
        TextBoxPage.emailField.should("have.class", "field-error");
      });


    });
  });