/// <reference types="cypress" />

const or = require("../../locator.json");

export default class openAccountElement {
  openAccount() {
    return cy.get(or.openAccountPage.openAccountDropDown);
  }
  customerName() {
    return cy.get(or.openAccountPage.customerNameDropDown);
  }

  currency() {
    return cy.get(or.openAccountPage.currencyDropDown);
  }

  process() {
    return cy.get(or.openAccountPage.processBtn);
  }
}
