/// <reference types="cypress" />
import HomePageactions from "../../pageObject/pageactions/HomePageactions";

import openAccountAction from "../../pageObject/pageactions/openAccountAction";

describe("open account page", () => {
  const homePage = new HomePageactions();
  const openaccount = new openAccountAction();

  before(() => {
    cy.fixture("textdata").then((data) => {
      globalThis.data1 = data;
    });
  });

  beforeEach(() => {
    homePage.navigateUrl();
  });

  it("open account testcase", () => {
    homePage.BankmanagerLogin();
    openaccount.customerAccountDetails(data1.customername, data1.currency);

    openaccount.validateAlert(data1.alertText);
  });
});
