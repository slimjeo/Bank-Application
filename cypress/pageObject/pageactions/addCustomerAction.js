/// <reference types="cypress" />
import addCustomerElement from "../pajeelements/addCustomerElement";

export default class addCustomerAction {
  constructor() {
    globalThis.element = new addCustomerElement();
  }

  addcustomerDetails(Firstname, LastName, PostalCode) {
    element.customerBtnPanel().click();
    element.customerFirstName().type(Firstname);
    element.customerLastName().type(LastName);
    element.customerPostalCode().type(PostalCode);
    element.addCustomerbtn().click();
  }

  validateAlert(alertMsg) {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include(alertText);
    });
  }
}
