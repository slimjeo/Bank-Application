/// <reference types="cypress" />
import HomePageactions from "../../pageObject/pageactions/HomePageactions";

describe("end to end page object model", () => {
  const homePage = new HomePageactions();
  beforeEach(() => {
    homePage.navigateUrl();
  });

  it("validate the page title", () => {
    homePage.validatetitle().should("eq", "Protractor practice website - Banking App");
  });

  it("login as bank manager", () => {
    homePage.BankmanagerLogin();
  });
});
