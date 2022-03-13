/// <reference types="cypress" />

const or = require("../../locator.json");

export default class homePageElements {
  customerloginbtnelement() {
    return cy.get(or.homepage.customerloginbtnelement);
  }

  Managerloginbtn() {
    return cy.get(or.homepage.Managerloginbtn);
  }
}
