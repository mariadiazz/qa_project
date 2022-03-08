import {By, WebElement} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Bestbuy extends BasePage {
    searchBar: By = By.className("search-input");
    results: By = By.xpath('//div[@class="app-container lv"]');
    searchButton: By = By.xpath('//button[@class="header-search-button"]');
    userMenu: By = By.xpath('//button[@class="c-button-unstyled plButton account-button d-flex justify-content-center align-items-center"]');
    signIn: By = By.xpath('//a[@class="c-button c-button-secondary c-button-sm sign-in-btn"]');
    emailSignIn: By = By.xpath('//input[@type="email"]');
    passwordSignIn: By = By.xpath('//input[@type="password"]');
    loginButton: By = By.xpath('//button[@type="submit"]');
    closePopup: By = By.xpath('//button[@class="c-close-icon c-modal-close-icon"]');
    addToCartButton: By = By.className("fulfillment-add-to-cart-button");
    cartButton: By = By.xpath('//div[@class="go-to-cart-button"]');
    menu: By = By.xpath('//button[@class="c-button-unstyled hamburger-menu-button"]');
    appliances: By = By.xpath('//button[@data-id="node-197"]');
    allAppliances: By = By.xpath('//a[@data-lid="ubr_app_dept"]');
    appliancePage: By = By.xpath('//div[@class="vn-panel col-xs-6 vn-panel-1"]');

    constructor() {
        super({url: "https://www.bestbuy.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async clickSearch () {
        return this.click(this.searchButton)
    }
    async getResults () {
        return this.getText(this.results)
    }
    async openMenu () {
        return this.click(this.userMenu)
    }
    async clickSignIn () {
        return this.click(this.signIn)
    }
    async closeWindow () {
        return this.click(this.closePopup)
    }
    async clickMenu () {
        return this.click(this.menu)
    }
    async clickAppliances () {
        return this.click(this.appliances)
    }
    async clickAllAppliances () {
        return this.click(this.allAppliances)
    }
    async appliancesResults () {
        return this.getText(this.appliancePage)
    }
    async clickAddToCart () {
        return this.click(this.addToCartButton)
    }

}