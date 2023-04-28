import TextBoxPage from "../../pageObjects/textBoxPage.page";
import CheckboxPage from "../../pageObjects/checkbox.page";
import RadioButtonPage from "../../pageObjects/radiobutton.page";

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

    // Checkbox scenarios
  context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });

    it('Checkbox select items', () => { 
      // Click expand (+) icon button
      CheckboxPage.expandButton.click();

      // Click Notes, Angular, Private, Excel File.doc
    CheckboxPage.checkboxTitles.contains("Notes").click();
    CheckboxPage.checkboxTitles.contains("Angular").click();
    CheckboxPage.checkboxTitles.contains("Private").click();
    CheckboxPage.checkboxTitles.contains("Excel File.doc").click();

      // Validate that selected items are registered
      CheckboxPage.result.should(
        "have.text",
        "You have selected :notesangularprivateexcelFile"
      );
      // Validate that selected items are registered
      CheckboxPage.result.should(
        "have.text",
        "You have selected :notesangularprivateexcelFile"
      );

     });

     it.only("Checkbox click Desktop", () => {
        // Click Expand (+) icon/button
        CheckboxPage.expandButton.click();
        // Click Desktop
        CheckboxPage.checkboxTitles.contains("Desktop").click();
        // Validate success message - You have selected :desktopnotescommands

        CheckboxPage.result.should(
            "have.text",
            "You have selected :desktopnotescommands"
          );



      });


    });

    // Radio button
  context("Radio Button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it.only("Click buttons and validate", () => {
      // Click Yes button
      RadioButtonPage.selectButton.contains("Yes").click();
      // Validate message - You have selected Yes
      RadioButtonPage.result.should(
        "have.text",
        "Yes"
      );
      // Click Impressive button
      RadioButtonPage.selectButton.contains("Impressive").click();
      // Validate message - You have selected Impressive
      RadioButtonPage.result.should(
        "have.text",
        "Impressive"
      );
      // Validate that no button is disabled
      RadioButtonPage.noButton.should("have.class","disabled");


    });
  });

    
  });
