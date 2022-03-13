/// <reference types="cypress" />
//import { data } from "cypress/types/jquery";
import openAccountElement from "../pajeelements/openAccountElement";

export default class openAccounAction {
  constructor() {
    globalThis.data = new openAccountElement();
  }
  customerAccountDetails(customername, currency) {
    data.openAccount().click();
    data.customerName().select(customername);
    data.currency().select(currency);
    data.process().click();
  }

  validateAlert(alertMsg) {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include(alertText);
    });
  }
}
