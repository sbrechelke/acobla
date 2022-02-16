class blazeDemoPO {
    //NAVBAR
    homeLink = "#navbarExample > ul > li.nav-item:nth-child(1) > a";
    contactLink = "#navbarExample > ul > li.nav-item:nth-child(2) > a";
    aboutUsLink = "#navbarExample > ul > li.nav-item:nth-child(3) > a";
    cartLink = "#navbarExample > ul > li.nav-item > a#cartur";
    logInLink = "#navbarExample > ul > li.nav-item > a#login2";
    logOutLink = "#navbarExample > ul > li.nav-item > a#logout2";
    signUpLink = "#navbarExample > ul > li.nav-item > a#signin2";
    welcomeUserLink = "#navbarExample > ul > li.nav-item > a#nameofuser";
    //LOG IN DIALOG
    logInModalLabel = "#logInModalLabel";
    logInModalClose = "#logInModal > div > div > div.modal-header > button";
    logInModalUsernameLabel = "#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label";
    logInModalUsernameInput = "#loginusername";
    logInModalPasswordLabel = "#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label";
    logInModalPasswordInput = "#loginpassword";
    logInModalError = "#errorl";
    logInModalCloseButton = "#logInModal > div > div > div.modal-footer > button:nth-child(1)";
    logInModalLoginButton = "#logInModal > div > div > div.modal-footer > button:nth-child(2)";
    login(user, pass){
        cy.get(this.logInLink).click();
        cy.wait(500);
        cy.get(this.logInModalUsernameInput).clear().type(user);
        cy.get(this.logInModalPasswordInput).clear().type(pass);
        cy.get(this.logInModalLoginButton).click();
        cy.wait(3000);
    }
    //CATEGORIES MENU
    categoriesAll = "#contcont > div > div > div > #cat";
    categoriesPhones = "#contcont > div > div > div.list-group > #itemc:nth-child(2)";
    categoriesLaptops = "#contcont > div > div > div.list-group > #itemc:nth-child(3)";
    categoriesMonitors = "#contcont > div > div > div.list-group > #itemc:nth-child(4)";
    //DEVICES
    firstDeviceImage = "#tbodyid > div:nth-child(1) > div > a > img";
    firstDeviceName = "#tbodyid > div:nth-child(1) > div > div > h4.card-title";
    firstDevicePrice = "#tbodyid > div:nth-child(1) > div > div > h5";
    firstDeviceDescription = "#tbodyid > div:nth-child(1) > div > div > #article";
    //DEVICE DETAILS
    deviceImage = "#imgp > div > img";
    deviceName = "#tbodyid > h2.name";
    devicePrice = "#tbodyid > h3.price-container";
    deviceDescription = "#more-information > p";
    deviceAddToCartButton = "div.product-content > div > #tbodyid > div:nth-child(7) > div > a.btn";
    //ALERTS
    productAddedAlert = "Product added";
    //CART
    productsLabel = "#page-wrapper > div > div:nth-child(1) > h2";
    summaryTablePicLabel = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > thead > tr > th:nth-child(1)";
    summaryTableTitleLabel = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > thead > tr > th:nth-child(2)";
    summaryTablePriceLabel = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > thead > tr > th:nth-child(3)";
    summaryTableActionLabel = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > thead > tr > th:nth-child(4)";
    cartfirstItemImage = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(1) > img";
    cartfirstItemTitle = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)";
    cartfirstItemPrice = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3)";
    cartfirstItemAction = "#page-wrapper > div > div:nth-child(1) > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(4) > a";
    totalLabel = "#page-wrapper > div > div:nth-child(2) > h2";
    totalPrice = "#totalp";
    placeOrderButton = "#page-wrapper > div > div:nth-child(2) > button";
    //PLACE ORDER DIALOG
    placeOrderModalLabel = "#orderModalLabel";
    placeOrderModalClose = "#orderModal > div > div > div.modal-header > button";
    placeOrderModalTotalPrice = "#totalm";
    placeOrderModalNameLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(2) > label";
    placeOrderModalNameInput = "#name";
    placeOrderModalCountryLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(3) > label";
    placeOrderModalCountryInput = "#country";
    placeOrderModalCityLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(4) > label";
    placeOrderModalCityInput = "#city";
    placeOrderModalCreditCardLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(5) > label";
    placeOrderModalCreditCardInput = "#card";
    placeOrderModalMonthLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(6) > label";
    placeOrderModalMonthInput = "#month";
    placeOrderModalYearLabel = "#orderModal > div > div > div.modal-body > form > div:nth-child(7) > label";
    placeOrderModalYearInput = "#year";
    placeOrderModalCloseButton = "#orderModal > div > div > div.modal-footer > button:nth-child(1)";
    placeOrderModalPurchaseButton = "#orderModal > div > div > div.modal-footer > button:nth-child(2)";
    //SWEET ALERT
    sweetAlertThankYou = "body > div.sweet-alert > h2";
    sweetAlertLead = "body > div.sweet-alert > p"
    sweetAlertConfirmButton = "body > div.sweet-alert > div.sa-button-container > div > button"

}
export default blazeDemoPO;