import BasePage from "./base.page";

class CheckboxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }

static get expandButton(){
    return cy.get('[class="rct-option rct-option-expand-all"]');
    //return cy.get(".rct-option-expand-all");
}

static get checkboxTitles(){
    return cy.get(".rct-title");
}

static get checkedItems(){

    return cy.get(".text-success");
}

static get result(){
    return cy.get("#result");
}
    
}
export default CheckboxPage;