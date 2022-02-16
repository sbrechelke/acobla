import blazePO from '../integration/pageObjects'
let testData = require('../fixtures/miscData.json');
const blaze = new blazePO();
var firstDeviceImgAttribute, firstDeviceNameText, firstDevicePriceText, firstDeviceDescriptionText;
var purchaseDate  = new Date().getDate() + "/" + parseInt((new Date().getMonth() + 1).toString()) + "/" + new Date().getFullYear();
console.log(purchaseDate)
describe('', ()=>{
    before(() => {
        cy.clearCookie('user');
        cy.clearCookie('tokenp_');
        cy.visit(testData.url);
    });
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('user', 'tokenp_')
    });
    it('checks navbar content before log in', ()=>{
        cy.get(blaze.homeLink).should('contain.text', testData.homeLink).and('be.visible');
        cy.get(blaze.contactLink).should('have.text', testData.contactLink).and('be.visible');
        cy.get(blaze.aboutUsLink).should('have.text', testData.aboutUsLink).and('be.visible');
        cy.get(blaze.cartLink).should('have.text', testData.cartLink).and('be.visible');
        cy.get(blaze.logInLink).should('have.text', testData.logInLink).and('be.visible');
        cy.get(blaze.logOutLink).should('have.text', testData.logOutLink).and('be.hidden');
        cy.get(blaze.signUpLink).should('have.text', testData.signUpLink).and('be.visible');
        cy.get(blaze.welcomeUserLink).should('be.empty').and('be.hidden');
    });
    it('log in into account', ()=>{
        blaze.login(testData.username, testData.password);
    });
    it('checks navbar content after log in', ()=>{
        cy.get(blaze.homeLink).should('contain.text', testData.homeLink).and('be.visible');
        cy.get(blaze.contactLink).should('have.text', testData.contactLink).and('be.visible');
        cy.get(blaze.aboutUsLink).should('have.text', testData.aboutUsLink).and('be.visible');
        cy.get(blaze.cartLink).should('have.text', testData.cartLink).and('be.visible');
        cy.get(blaze.logInLink).should('have.text', testData.logInLink).and('be.hidden');
        cy.get(blaze.logOutLink).should('have.text', testData.logOutLink).and('be.visible');
        cy.get(blaze.signUpLink).should('have.text', testData.signUpLink).and('be.hidden');
        cy.get(blaze.welcomeUserLink).should('have.text', testData.welcomeUserLink).and('be.visible');
    });
    it('select "phones" category and collect info about 1st device on list', ()=>{
        cy.get(blaze.categoriesPhones).click();
        cy.get(blaze.firstDeviceImage).invoke('attr', 'src').then((attr)=>{
            firstDeviceImgAttribute = attr;
        });
        cy.get(blaze.firstDeviceName).then((text)=>{
            firstDeviceNameText = text.text();
        });
        cy.get(blaze.firstDevicePrice).then((text)=>{
            firstDevicePriceText = text.text();
        });
        cy.get(blaze.firstDeviceDescription).then((text)=>{
            firstDeviceDescriptionText = text.text();
        });
    });
    it('choose 1st device', ()=>{
        cy.get(blaze.firstDeviceImage).click();
    });
    it('checks selected device details and add it to cart', ()=>{
        cy.get(blaze.deviceImage).invoke('attr', 'src').then((attr) => {
            expect(attr).contain(firstDeviceImgAttribute);
        });
        cy.get(blaze.deviceName).should('contain.text', firstDeviceNameText).and('be.visible');
        cy.get(blaze.devicePrice).should('contain.text', firstDevicePriceText).and('be.visible');
        cy.get(blaze.deviceDescription).invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, '')).contain(firstDeviceDescriptionText.trim());
        });
        cy.get(blaze.deviceAddToCartButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains(testData.productAddedAlertText);
        });
    });
    it('click "cart" link', ()=>{
        cy.get(blaze.cartLink).click();
    });
    it('check cart and click "place order" button', ()=>{
        cy.get(blaze.cartfirstItemImage).invoke('attr', 'src').then((attr) => {
            expect(attr).contain(firstDeviceImgAttribute);
        });
        cy.get(blaze.cartfirstItemTitle).should('contain.text', firstDeviceNameText).and('be.visible');
        cy.get(blaze.cartfirstItemPrice).should('contain.text', firstDevicePriceText.substring(1)).and('be.visible');
        cy.get(blaze.totalPrice).should('contain.text', firstDevicePriceText.substring(1)).and('be.visible');
        cy.get(blaze.placeOrderButton).click();
    });
    it('check summary dialog', ()=>{
        cy.get(blaze.placeOrderModalLabel).should('contain.text', testData.summaryLabel).and('be.visible');
        cy.get(blaze.placeOrderModalTotalPrice).should('contain.text', testData.summaryTotalLabel).and('be.visible');
        cy.get(blaze.placeOrderModalTotalPrice).should('contain.text', firstDevicePriceText.substring(1)).and('be.visible');
        cy.get(blaze.placeOrderModalNameLabel).should('contain.text', testData.summaryNameLabel).and('be.visible');
        cy.get(blaze.placeOrderModalCountryLabel).should('contain.text', testData.summaryCountryLabel).and('be.visible');
        cy.get(blaze.placeOrderModalCityLabel).should('contain.text', testData.summaryCityLabel).and('be.visible');
        cy.get(blaze.placeOrderModalCreditCardLabel).should('contain.text', testData.summaryCardLabel).and('be.visible');
        cy.get(blaze.placeOrderModalMonthLabel).should('contain.text', testData.summaryMonthLabel).and('be.visible');
        cy.get(blaze.placeOrderModalYearLabel).should('contain.text', testData.summaryYearLabel).and('be.visible');
    });
    it('fill inputs and confirm purchase', ()=>{
        cy.get(blaze.placeOrderModalNameInput).clear().type(testData.userData.good.name);
        cy.get(blaze.placeOrderModalCityInput).clear().type(testData.userData.good.city);
        cy.get(blaze.placeOrderModalCountryInput).clear().type(testData.userData.good.country);
        cy.get(blaze.placeOrderModalCreditCardInput).clear().type(testData.userData.good.card);
        cy.get(blaze.placeOrderModalMonthInput).clear().type(testData.userData.good.month);
        cy.get(blaze.placeOrderModalYearInput).clear().type(testData.userData.good.year);
        cy.get(blaze.placeOrderModalPurchaseButton).click();
    });
    it('sweet alert check and confirm', ()=>{
        cy.get(blaze.sweetAlertThankYou).should('contain.text', testData.sweetAlert.thanks).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.sweetAlert.id).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.sweetAlert.amount).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', firstDevicePriceText.substring(1)).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.sweetAlert.card).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.userData.good.card).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.sweetAlert.name).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.userData.good.name).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', testData.sweetAlert.date).and('be.visible');
        cy.get(blaze.sweetAlertLead).should('contain.text', purchaseDate).and('be.visible');
        cy.get(blaze.sweetAlertConfirmButton).click();
    });
});