/// <reference types="cypress" />

import homePageElements from "../pajeelements/homePageElements";

export default class HomePageactions {
  constructor() {
    globalThis.helement = new homePageElements();
  }

  navigateUrl() {
    cy.visit("/");
  }

  validatetitle() {
    return cy.title();
  }

  customerlogin() {
    helement.customerloginbtnelement().click();
  }

  BankmanagerLogin() {
    helement.Managerloginbtn().click();
  }
}
