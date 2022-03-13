/// <reference types="cypress" />

const or = require("../../locator.json");

export default class addCustomerElement {
  customerBtnPanel() {
    return cy.get(or.customerPage.customerBtnPanel);
  }

  customerFirstName() {
    return cy.get(or.customerPage.customerFirstName);
  }

  customerLastName() {
    return cy.get(or.customerPage.customerLastName);
  }

  customerPostalCode() {
    return cy.get(or.customerPage.customerPostalCode);
  }

  addCustomerbtn() {
    return cy.get(or.customerPage.addCustomerbtn);
  }
}
