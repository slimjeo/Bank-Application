/// <reference types="cypress" />
import HomePageactions from "../../pageObject/pageactions/HomePageactions";

import addCustomerAction from "../../pageObject/pageactions/addCustomerAction";

describe("customer biometric page", () => {
  const homePage = new HomePageactions();
  const customerPage = new addCustomerAction();

  before(() => {
    cy.fixture("textdata").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homePage.navigateUrl();
  });

  it("details of the customer", () => {
    homePage.BankmanagerLogin();
    customerPage.addcustomerDetails(data.firstname, data.lastname, data.postalcode);
    customerPage.validateAlert(data.alertmsg);
  });
});
