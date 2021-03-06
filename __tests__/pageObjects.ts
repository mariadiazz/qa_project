import { By, WebElement } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Bestbuy extends BasePage {
  searchBar: By = By.className("search-input");
  results: By = By.xpath('//div[@aria-labelledby="page-results-heading"]');
  searchButton: By = By.xpath('//button[@class="header-search-button"]');
  userMenu: By = By.xpath('//button[@class="c-button-unstyled plButton account-button d-flex justify-content-center align-items-center"]');
  signIn: By = By.xpath('//a[@class="c-button c-button-secondary c-button-sm sign-in-btn"]');
  emailSignIn: By = By.xpath('//input[@type="email"]');
  passwordSignIn: By = By.xpath('//input[@type="password"]');
  loginButton: By = By.xpath('//button[@type="submit"]');
  logoutButton: By = By.id("logout-button");
  closePopup: By = By.xpath('//button[@class="c-close-icon c-modal-close-icon"]');
  addToCartButton: By = By.className("fulfillment-add-to-cart-button");
  cartButton: By = By.xpath('//div[@class="go-to-cart-button"]');
  cartIcon: By = By.xpath('//div[@class="cart-icon"]');
  menu: By = By.xpath('//button[@class="c-button-unstyled hamburger-menu-button"]');
  appliances: By = By.xpath('//button[@data-id="node-197"]');
  allAppliances: By = By.xpath('//a[@data-lid="ubr_app_dept"]');
  appliancePage: By = By.xpath('//div[@class="vn-panel col-xs-6 vn-panel-1"]');
  cartResults: By = By.xpath('//div[@class="populated-cart"]');
  americaLink: By = By.css('.us-link');
  saveItemButton: By = By.css('.save-for-later-save');
  compareCheckbox: By = By.css('.c-checkbox-input');
  compareCheckboxOne: By = By.xpath('(//*[@class="shop-compare-checkbox"]//label[text()="Compare"])[1]');
  compareCheckboxTwo: By = By.xpath('(//*[@class="shop-compare-checkbox"]//label[text()="Compare"])[2]');
  comparison: By = By.css('.compare-heading');
  compareButton: By = By.css('.compare-button');
  compareResults: By = By.css('.compareAppContainer');
  skuItem: By = By.xpath('//*[@class="sku-item"]');
  savedItems: By = By.css('.savedItems-button');
  savedItemsResults: By = By.css('.utility-flyout-saved-items .sku-card-product-title');
  checkOutButton: By = By.xpath('//div[@class="checkout-buttons__checkout"]');
  checkOutPage: By = By.xpath('//div[@class="order-summary__bd"]');
  continueAsGuest: By = By.xpath('//button[@class="c-button c-button-secondary c-button-lg cia-guest-content__continue guest"]');

  constructor() {
    super({ url: "https://www.bestbuy.com/" });
  }
  async search(searchTerm: string) {
    return this.setInput(this.searchBar, `${searchTerm}`);
  }
  async clickSearch() {
    return this.click(this.searchButton)
  }
  async getResults() {
    return this.getText(this.results)
  }
  async openMenu() {
    return this.click(this.userMenu)
  }
  async clickSignIn() {
    return this.click(this.signIn)
  }
  async closeWindow() {
    return this.click(this.closePopup)
  }
  async clickMenu() {
    return this.click(this.menu)
  }
  async clickAppliances() {
    return this.click(this.appliances)
  }
  async clickAllAppliances() {
    return this.click(this.allAppliances)
  }
  async appliancesResults() {
    return this.getText(this.appliancePage)
  }
  async clickAddToCart() {
    return this.click(this.addToCartButton)
  }
  async clickGoToCart() {
    return this.click(this.cartIcon)
  }
  async viewCart() {
    return this.getText(this.cartResults)
  }
  async viewComparedResults() {
    return this.click(this.compareButton)
  }
  async clickCompareCheckbox(checkboxSelector?: By) {
    if (checkboxSelector) {
      return this.executeScriptclick(checkboxSelector);
    }
    return this.click(this.compareCheckbox);
  }
  async clickSaveItem() {
    return this.click(this.saveItemButton);
  }
  async viewSavedItems() {
    return this.click(this.savedItems);
  }
  async goToAmericanSite() {
    return this.clickIfExists(this.americaLink);
  }
  async clickCheckOut () {
    return this.click(this.checkOutButton)
  }
  async clickContinueAsGuest () {
    return this.click(this.continueAsGuest)
  }
  async checkOutResults () {
    return this.getText(this.checkOutPage)
  }
  async email (emailInput: string) {
    return this.setInput(this.emailSignIn, `${emailInput}\n`)
  }
  async password (passwordInput: string) {
    return this.setInput(this.passwordSignIn, `${passwordInput}\n`)
  }
  async confirmLogin () {
    return this.click(this.loginButton)
  }
  async clickLogout () {
    return this.click(this.logoutButton)
  }
}